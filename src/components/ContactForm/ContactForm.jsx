import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Це поле обовʼязкове!"),
    number: Yup.string()
      //.matches(/^\d{3}-\d{2}-\d{2}$/, "Не вірний формат номеру!")
      .min(7, "Мінімум 7 символів")
      .max(13, "Максимум 13 символів")
      .required("Це поле обовʼязкове!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    onAddContact(newContact);
    resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>Name: </span>
              <Field className={s.input} name="name" type="text" />
              <ErrorMessage name="name" className={s.error} component="div" />
            </label>
            <label className={s.label}>
              <span>Number: </span>
              <Field
                className={s.input}
                name="number"
                type="text"
                placeholder="+38(000) 000 00 00"
              />
              <ErrorMessage name="number" className={s.error} component="div" />
            </label>
            <button className={s.button} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
export default ContactForm;
