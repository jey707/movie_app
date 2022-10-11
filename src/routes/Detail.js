import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie_detail from "../components/Movie_detail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie_detail
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            slug={movie.slug}
            likeCount={movie.like_count}
            rating={movie.rating}
            runtime={movie.runtime}
            downLoadCount={movie.download_count}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
