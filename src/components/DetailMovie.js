import PropTypes from "prop-types";
import styles from "./DetailMovie.module.css";

function DetailMovie({ coverImg, title, year, rating, description, genres }) {
  return (
    <div className={styles.detail}>
      <img src={coverImg} alt={title} className={styles.detail__img} />
      <div>
        <h2 className={styles.detail__title}>{title}</h2>
        <h3 className={styles.detail__year}>{year}</h3>
        <h3 className={styles.detail__rating}>💕 : {rating}</h3>
        <p className={styles.detail__description}>{description}</p>
        <ul className={styles.detail__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

DetailMovie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;
