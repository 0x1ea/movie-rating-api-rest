import React from "react"
import Image from "next/image"
import styles from "../styles/MovieList.module.css"

const MovieList = ({ movies }) => {
  return (
    <div>
      <section id="genericList" className={styles.genericList_container}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie_container}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
              className={styles.movie_img}
              alt={movie?.original_title}
              width={150}
              height={225}
            />
          </div>
        ))}
        {/* 
        <div className={styles.movie_container}>
          <Image
            src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
            className={styles.movie_img}
            alt="Nombre de la película"
            width={150}
            height={225}
          />
        </div> 
        */}
      </section>
    </div>
  )
}

export default MovieList
