import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Trendring from "../components/Trendring"
import CategoriesPreview from "../components/CategoriesPreview"
import MovieDetail from "../components/MovieDetail"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Rating</title>
        <meta name="description" content="Movie Rating App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Trendring />

      <CategoriesPreview />

      <section
        id="genericList"
        className={styles.genericList_container}
        style={{ display: "none" }}
      >
        <div className={styles.movie_container}>
          <Image
            src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
            className={styles.movie_img}
            alt="Nombre de la película"
            width={200}
            height={300}
          />
        </div>

        <div className={styles.movie_container}>
          <imImageg
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
      </section>

      <MovieDetail />
      <Footer />
    </div>
  )
}
