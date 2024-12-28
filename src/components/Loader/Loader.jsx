import s from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchbox}>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
};
SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
