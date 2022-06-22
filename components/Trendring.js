import React from "react"
import styles from "../styles/Trending.module.css"
import Image from "next/image"

const Trendring = () => {
  return (
    <section id="trendingPreview" className={styles.trendingPreview_container}>
      <div className={styles.trendingPreview_header}>
        <h2 className={styles.trendingPreview_title}>Tendencias</h2>
        <button className={styles.trendingPreview_btn}>Ver más</button>
      </div>

      <article className={styles.trendingPreview_movieList}>
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
      </article>
    </section>
  )
}

export default Trendring
