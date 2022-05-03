import ShowsContext from "./ShowsContext";

const ShowsProvider = ({ children }) => {
  const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <ShowsContext.Provider value={arrayTest}>{children}</ShowsContext.Provider>
  );
};

export default ShowsProvider;
