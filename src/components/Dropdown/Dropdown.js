import styled from "styled-components";

const StyledDropdownComponent = styled.div`
  border: 1px solid grey;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 15px;

  .selectGenre {
    color: white;
    border: 0;
  }
`;

const Dropdown = ({ genres }) => {
  return (
    <StyledDropdownComponent>
      <form action="genres">
        <label htmlFor="genres">Genres: </label>
        <select className="selectGenre" name="genre" id="genre">
          <option value={genres[0]}>{genres[0]}</option>
        </select>
      </form>
    </StyledDropdownComponent>
  );
};

export default Dropdown;
