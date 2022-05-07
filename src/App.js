import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import FavsPage from "./pages/FavsPage";
import HomePage from "./pages/HomePage";
import ShowsProvider from "./store/context/ShowsProvider";

export const Location = () => {
  // eslint-disable-next-line no-unused-vars
  const locationDisplay = useLocation();
};

function App() {
  return (
    <>
      <ShowsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/favspage" element={<FavsPage />} />
        </Routes>
        <Location />
      </ShowsProvider>
    </>
  );
}

export default App;
