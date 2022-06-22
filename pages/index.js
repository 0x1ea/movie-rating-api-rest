import React from "react"
import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Trendring from "../components/Trendring"
import CategoriesPreview from "../components/CategoriesPreview"
import MovieDetail from "../components/MovieDetail"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import axios from "axios"

export default function Home() {
  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    params: {
      api_key: process.env.API_KEY,
    },
  })

  return (
    <div>
      <Head>
        <title>Movie Rating</title>
        <meta name="description" content="Movie Rating App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Trendring api={api} />

      <CategoriesPreview api={api} />

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
