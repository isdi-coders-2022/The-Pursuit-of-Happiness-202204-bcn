const Dropdown = ({ genres }) => {
  return (
    <form action="genres">
      <label htmlFor="genres">Genres: </label>
      <select name="genre" id="genre">
        <option value={genres[0]}>{genres[0]}</option>
      </select>
    </form>
  );
};

export default Dropdown;
