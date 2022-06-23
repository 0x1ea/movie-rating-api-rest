import React from "react"
import Image from "next/image"
import styles from "../styles/MovieDetail.module.css"
import useApi from "../utils/useApi"

const MovieDetail = ({ name, description, rating, genres }) => {
  const { api } = useApi()
  const [myGenres, setMyGenres] = React.useState([])

  const getGenres = async () => {
    const { data } = await api("/genre/movie/list")
    const allGenres = data.genres
    const myGenres = []

    genres.map((genre) =>
      allGenres.map((mbdGenre) => {
        mbdGenre.id == genre && myGenres.push({ id: mbdGenre.id, name: mbdGenre.name })
      })
    )

    setMyGenres(myGenres)
  }

  React.useEffect(() => {
    getGenres()
  }, [])

  return (
    <section id="movieDetail" className={styles.movieDetail_container}>
      <h1 className={styles.movieDetail_title}>{name}</h1>
      <span className={styles.movieDetail_score}>{rating}</span>
      <p className={styles.movieDetail_description}>{description}</p>

      <article className={styles.categories_list}>
        {myGenres.map((genre) => (
          <div key={genre.id} className={styles.category_container}>
            <h3 id={"id" + genre.id} className={styles.category_title}>
              {genre.name}
            </h3>
          </div>
        ))}

        {/* 
        <div className={styles.category_container}>
          <h3 id="id14" className={styles.category_title}>
            Acción
          </h3>
        </div> 
        */}
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
