import styled from "styled-components";

const StyledDropdownComponent = styled.div`
  border: 1px solid grey;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 16px;
  select {
    border: none;
  }

  .selectGenre {
    color: white;
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
