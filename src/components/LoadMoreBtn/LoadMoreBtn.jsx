import s from "./Contact.module.css";
import PropTypes from "prop-types";
import { BsPersonSquare } from "react-icons/bs";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={s.item}>
      <div>
        <p>
          <BsPersonSquare className={s.card_icon} />
          {name}
        </p>
        <p>
          <LiaPhoneVolumeSolid className={s.card_icon} />
          {number}
        </p>
      </div>
      <button className={s.button} type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
