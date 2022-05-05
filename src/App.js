import { Navigate, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import FavsPage from "./pages/FavsPage";
import HomePage from "./pages/HomePage";
import ShowsProvider from "./store/context/ShowsProvider";

function App() {
  return (
    <>
      <ShowsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/favspage" element={<FavsPage />} />
          <Route path="/detailpage" element={<DetailPage />} />
        </Routes>
      </ShowsProvider>
    </>
  );
}

export default App;
