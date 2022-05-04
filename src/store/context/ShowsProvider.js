import { useState } from "react";
import ShowsContext from "./ShowsContext";

const ShowsProvider = ({ children }) => {
  const [arrayTest, setArrayTest] = useState([1, 2, 3, 4, 5, 6, 7]);

  const setNewArray = () => {
    setArrayTest([...arrayTest, 2]);
  };
  return (
    <ShowsContext.Provider value={{ arrayTest, setNewArray }}>
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsProvider;
