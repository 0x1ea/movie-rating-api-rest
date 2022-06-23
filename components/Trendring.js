import React from "react"
import styles from "../styles/Trending.module.css"
import Image from "next/image"
import Link from "next/link"

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
        <Link href="/trends">
          <button className={styles.trendingPreview_btn}>More</button>
        </Link>
      </div>

      <article className={styles.trendingPreview_movieList}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie_container}>
            <Link
              href={{
                pathname: `/details/${movie.id}`,
                query: {
                  name: movie.original_title,
                  description: movie.overview,
                  rating: movie.vote_average,
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
                />
              </a>
            </Link>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Trendring
