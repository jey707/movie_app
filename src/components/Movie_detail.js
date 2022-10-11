import PropTypes from "prop-types";

function Movie_detail({
  id,
  coverImg,
  title,
  slug,
  likeCount,
  rating,
  runtime,
  downLoadCount,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <div>
        <p>Download count:{downLoadCount}</p>
        <p>Like count:{likeCount}</p>
        <p>rating:{rating}</p>
        <p>runtime:{runtime}</p>
      </div>
      <span>{slug}</span>
    </div>
  );
}

Movie_detail.propType = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  likeCount: PropTypes.number,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  downLoadCount: PropTypes.number,
};

export default Movie_detail;
