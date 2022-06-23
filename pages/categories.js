import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MovieList from "../components/MovieList"
import Head from "next/head"

const categories = () => {
  return (
    <div>
      <Head>
        <title>Categories</title>
        <meta name="description" content="Movie Rating App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        title={[true, "none", "true"]}
        formDisplay={"true"}
        headerContainer={"header_container"}
      />
      <MovieList />
      <Footer />
    </div>
  )
}

export default categories
