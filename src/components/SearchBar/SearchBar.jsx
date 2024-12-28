import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={s.formWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
