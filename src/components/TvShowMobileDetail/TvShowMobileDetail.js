const TvShowMobileDetail = ({ name, year, rating, genre, posterURL }) => {
  return (
    <>
      <p data-testid="tvShowDetail" className="title">
        {name}
      </p>
      <p className="year">{year}</p>
    </>
  );
};

export default TvShowMobileDetail;
