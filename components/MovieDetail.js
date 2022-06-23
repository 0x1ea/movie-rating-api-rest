import React from "react"
import Image from "next/image"
import styles from "../styles/MovieDetail.module.css"
import useApi from "../utils/useApi"
import Link from "next/link"

const MovieDetail = ({ id, name, description, rating, genres }) => {
  const { api } = useApi()
  const [myGenres, setMyGenres] = React.useState([])
  const [movies, setMovies] = React.useState([])

  const getGenres = async (genres) => {
    const { data } = await api("/genre/movie/list")
    const allGenres = data.genres
    const myGenres = []

    genres.map((genre) => {
      allGenres.map(
        (mbdGenre) =>
          mbdGenre.id == genre && myGenres.push({ id: mbdGenre.id, name: mbdGenre.name })
      )
    })

    setMyGenres(myGenres)
  }

  const getRelatedMovies = async (id) => {
    const { data } = await api(`/movie/${id}/recommendations`)
    console.log(data.results)
    setMovies(data.results)
  }

  React.useEffect(() => {
    getGenres(genres)
    getRelatedMovies(id)
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
      </article>

      <article className={styles.relatedMovies_container}>
        <h2 className={styles.relatedMovies_title}>Películas similares</h2>

        <div className={styles.relatedMovies_scrollContainer}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movie_container}>
              <Link
                href={{
                  pathname: `/details/${movie.id}`,
                  query: {
                    id: movie.id,
                    name: movie.original_title,
                    description: movie.overview,
                    rating: movie.vote_average,
                    image: movie.poster_path,
                    genres: movie.genre_ids,
                  },
                }}
              >
                <a>
                  <Image
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    className={styles.movie_img}
                    alt={movie.title}
                    width={150}
                    height={225}
                    onClick={() => {
                      getGenres(movie.genre_ids)
                      getRelatedMovies(movie.id)
                    }}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default MovieDetail
