import styled from "styled-components";

const StyledFormCreateComponent = styled.div`
  color: white;
  align-items: center;
  font-size: 18px;
  position: relative;
  bottom: -240%;
  form {
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid black;
    }
    label {
      margin-top: 10px;
    }
  }
  .form-input {
    background-color: white;
  }
  .form-input__summary {
    background-color: white;
    height: 100px;
  }
  .smallInput {
    display: flex;
    flex-direction: column;
    width: 180px;
    margin-right: 10px;
  }
  .submitButton {
    background-color: rgba(226, 182, 22, 1);
    height: 50px;
    border: 1px solid black;
    border-radius: 6px;
    width: auto;
    margin-top: 20px;
    padding: 4px;
    font-size: 18px;
    font-weight: 800;
  }
  .submitButton:hover {
    background: white;
    border-radius: 6px;
  }
  .row-display {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #242a32;
    justify-content: space-between;
  }
`;

const FormCreate = () => {
  return (
    <StyledFormCreateComponent>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-input" id="name" />
        <label htmlFor="summary">Summary:</label>
        <textarea className="form-input__summary" id="summary" />
        <label>Image:</label>
        <input
          type="url"
          className="form-input"
          alt="Import your Poster"
        ></input>
        <div className="row-display">
          <div className="smallInput">
            <label htmlFor="genre">Genre:</label>
            <input type="text" className="form-input" id="genre" />
          </div>
          <div className="smallInput">
            <label htmlFor="rating">Rating:</label>
            <input type="number" className="form-input" id="rating" />
          </div>
        </div>
        <div className="row-display">
          <div className="smallInput">
            <label htmlFor="year">Year:</label>
            <input type="number" className="form-input" id="year" />
          </div>
          <div className="smallInput">
            <label htmlFor="language">Language:</label>
            <input type="text" className="form-input" id="language" />
          </div>
        </div>
        <div className="smallInput">
          <label htmlFor="runtime">Runtime:</label>
          <input type="number" className="form-input" id="runtime" />
        </div>
        <button type="submit" className="submitButton" value="Submit">
          CREATE TV SHOW
        </button>
      </form>
    </StyledFormCreateComponent>
  );
};

export default FormCreate;
