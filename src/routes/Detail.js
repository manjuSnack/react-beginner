import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovies from "../components/DetailMovie";
import homeStyles from "../routes/Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={homeStyles.container}>
      {loading ? (
        <div className={homeStyles.loader}>
          <span>Loading</span>
        </div>
      ) : (
        <DetailMovies
          key={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          description={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
