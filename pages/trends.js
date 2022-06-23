import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MovieList from "../components/MovieList"
import Head from "next/head"
import useApi from "../utils/useApi"

const Trends = () => {
  const [movies, setMovies] = React.useState([])
  const { api } = useApi()
  const title = ["true", "true", "none"]

  const getAllTrending = async () => {
    const { data } = await api("/trending/movie/day")
    setMovies(data.results)
    console.log(data.results)
  }

  React.useEffect(() => {
    getAllTrending()
  }, [])

  return (
    <>
      <Head>
        <title>Trending</title>
        <meta name="description" content="Movie Rating App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        title={title}
        titleText={"Trending"}
        formDisplay={"none"}
        headerContainer={"header_container"}
      />
      <MovieList movies={movies} />
      <Footer />
    </>
  )
}

export default Trends
