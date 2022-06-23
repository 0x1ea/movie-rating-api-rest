import React from "react"
import Image from "next/image"
import styles from "../styles/MovieDetail.module.css"

const MovieDetail = ({ name, description, rating }) => {
  return (
    <section
      id="movieDetail"
      className={styles.movieDetail_container} /* style={{ display: "none" }} */
    >
      <h1 className={styles.movieDetail_title}>{name}</h1>
      <span className={styles.movieDetail_score}>{rating}</span>
      <p className={styles.movieDetail_description}>{description}</p>

      <article className={styles.categories_list}>
        <div className={styles.category_container}>
          <h3 id="id28" className={styles.category_title}>
            Romance
          </h3>
        </div>

        <div className={styles.category_container}>
          <h3 id="id16" className={styles.category_title}>
            Drama
          </h3>
        </div>

        <div className={styles.category_container}>
          <h3 id="id14" className={styles.category_title}>
            Acción
          </h3>
        </div>
      </article>

      <article className={styles.relatedMovies_container}>
        <h2 className={styles.relatedMovies_title}>Películas similares</h2>

        <div className={styles.relatedMovies_scrollContainer}>
          <div className={styles.movie_container}>
            <Image
              src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
              className={styles.movie_img}
              alt="Nombre de la película"
              width={150}
              height={225}
            />
          </div>

          <div className={styles.movie_container}>
            <Image
              src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
              className={styles.movie_img}
              alt="Nombre de la película"
              width={150}
              height={225}
            />
          </div>

          <div className={styles.movie_container}>
            <Image
              src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
              className={styles.movie_img}
              alt="Nombre de la película"
              width={150}
              height={225}
            />
          </div>
        </div>
      </article>
    </section>
  )
}

export default MovieDetail
