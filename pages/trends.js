import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MovieList from "../components/MovieList"
import Head from "next/head"
const Trends = () => {
  const title = ["true", "true", "none"]
  return (
    <>
      <Head>
        <title>Trending</title>
        <meta name="description" content="Movie Rating App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={title} formDisplay={"none"} headerContainer={"header_container"} />
      <MovieList />
      <Footer />
    </>
  )
}

export default Trends
