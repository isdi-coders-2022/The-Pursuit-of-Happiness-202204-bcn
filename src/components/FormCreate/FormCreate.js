import styled from "styled-components";

const StyledFormCreateComponent = styled.div`
  /* width: vh; */
  color: white;
  align-items: center;
  font-size: 18px;
  .form-input {
    background-color: white;
  }
  .submitButton {
    background-color: rgba(226, 182, 22, 1);
    border: 1px solid black;
    border-radius: 6px;
    width: 60px;
  }
  .form-submit-button:hover {
    background: #016abc;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #eee;
    text-shadow: none;
  }
`;

const FormCreate = () => {
  return (
    <StyledFormCreateComponent>
      <form>
        <label>
          Name:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Summary:
          <textarea className="form-input" name="summary" />
        </label>
        <label>
          Image:
          <input
            type="url"
            className="form-input"
            alt="Import your Poster"
          ></input>
        </label>
        <label>
          Genre:
          <input type="text" className="form-input" name="genre" />
        </label>
        <label>
          Rating:
          <input type="number" className="form-input" name="rating" />
        </label>
        <label>
          Year:
          <input type="number" className="form-input" name="year" />
        </label>
        <label>
          Language:
          <input type="text" className="form-input" name="language" />
        </label>
        <label>
          Runtime:
          <input type="number" className="form-input" name="runtime" />
        </label>

        <input type="submit" className="submitButton" value="Submit" />
      </form>
    </StyledFormCreateComponent>
  );
};

export default FormCreate;
