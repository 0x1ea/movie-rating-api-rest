import React from "react"
import styles from "../styles/Trending.module.css"
import Image from "next/image"

const Trendring = ({ api }) => {
  const [movies, setMovies] = React.useState([])

  const getTrendingMoviesPreview = async () => {
    const { data } = await api("/trending/movie/day")
    console.log(data.results)
    setMovies(data.results)
  }

  React.useEffect(() => {
    getTrendingMoviesPreview()
  }, [])
  return (
    <section className={styles.trendingPreview_container}>
      <div className={styles.trendingPreview_header}>
        <h2 className={styles.trendingPreview_title}>Trending</h2>
        <button className={styles.trendingPreview_btn}>More</button>
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
