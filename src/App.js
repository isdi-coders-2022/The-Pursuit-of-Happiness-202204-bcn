import { Navigate, Route, Routes } from "react-router-dom";
import FavsPage from "./pages/FavsPage";
import HomePage from "./pages/HomePage";
import ShowsProvider from "./store/context/ShowsProvider";

function App() {
  return (
    <>
      <ShowsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/HomePage" />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/FavsPage" element={<FavsPage />} />
        </Routes>
      </ShowsProvider>
    </>
  );
}

export default App;
