import React from "react"
import Image from "next/image"
import styles from "../styles/MovieList.module.css"
import Link from "next/link"
const MovieList = ({ movies }) => {
  return (
    <div>
      <section id="genericList" className={styles.genericList_container}>
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
                />
              </a>
            </Link>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MovieList
