import DropdownComponent from "./components/DropdownComponent/DropdownComponent";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar homeText={"Home"} favText={"Favorites"} />
      <DropdownComponent />
    </>
  );
}

export default App;
