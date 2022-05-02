const TvShowMobileDetail = (props) => {
  return (
    <>
      <div className="TvShowMobileDetail__container">
        <div className="TvShowMobileDetail__poster">
          <img src={props.posterURL} alt={props.name} />
          <p>{props.name}</p>
        </div>
        <div className="TvShowMobileDetail_content">
          <img src="img/star.png" alt="Rating star" />
          <p>{props.rating}</p>
          <p>{props.year}</p>
          <p>{props.genre}</p>
        </div>
      </div>
    </>
  );
};

export default TvShowMobileDetail;
