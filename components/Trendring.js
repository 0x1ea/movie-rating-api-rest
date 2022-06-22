import React from "react"
import styles from "../styles/Trending.module.css"
import Image from "next/image"

const Trendring = () => {
  const [movies, setMovies] = React.useState([])
  const API_KEY = process.env.API_KEY
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`

  const getTrendingMoviesPreview = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()

    const movies = data.results

    setMovies(movies)
    console.log(movies)
  }

  React.useEffect(() => {
    getTrendingMoviesPreview()
  }, [])

  return (
    <section className={styles.trendingPreview_container}>
      <div className={styles.trendingPreview_header}>
        <h2 className={styles.trendingPreview_title}>Tendencias</h2>
        <button className={styles.trendingPreview_btn}>Ver más</button>
      </div>

      <article className={styles.trendingPreview_movieList}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie_container}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              className={styles.movie_img}
              alt={movie.title}
              width={150}
              height={225}
            />
          </div>
        ))}
      </article>
    </section>
  )
}

export default Trendring
