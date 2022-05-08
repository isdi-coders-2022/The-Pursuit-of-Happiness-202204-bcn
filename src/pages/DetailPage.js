import useData from "../store/hooks/useData";
import { useEffect, useContext } from "react";
import ShowsContext from "../store/context/ShowsContext";
import Footer from "../components/Footer/Footer";
import ShowContainer from "../components/ShowsContainer/ShowContainer";
import Header from "../components/Header/Header";

const DetailPage = () => {
  const { state } = useContext(ShowsContext);
  const { loadFavShows } = useData();

  useEffect(() => {
    loadFavShows();
  }, [loadFavShows]);

  return (
    <>
      <Header />
      <ShowContainer pageKey={"fav"} state={state} className="w-100" />

      <Footer />
    </>
  );
};

export default DetailPage;
