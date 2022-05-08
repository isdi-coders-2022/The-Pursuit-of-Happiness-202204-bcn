import { Navigate, Route, Routes } from "react-router-dom";
import FavsPage from "./pages/FavsPage";
import HomePage from "./pages/HomePage";
import ShowDetailPage from "./pages/ShowDetailPage";
import ShowsProvider from "./store/context/ShowsProvider";

function App() {
  return (
    <>
      <ShowsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/favspage" element={<FavsPage />} />
          <Route path="/showdetailpage" element={<ShowDetailPage />} />
        </Routes>
      </ShowsProvider>
    </>
  );
}

export default App;
