import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MovieList from "../components/MovieList"
import { useRouter } from "next/router"
import Head from "next/head"
import useApi from "../utils/useApi"
const Search = () => {
  const router = useRouter()
  const { value } = router.query
  const { api } = useApi()
  const [movies, setMovies] = React.useState([])

  const getMoviesByQuery = async () => {
    const { data } = await api("/search/movie", {
      params: {
        query: value,
      },
    })
    setMovies(data.results)
  }

  React.useEffect(() => {
    getMoviesByQuery()
  }, [value])

  return (
    <div>
      <Head>
        <title>{value}</title>
        <meta name="description" content="Movie Rating App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        title={[true, "true", "none"]}
        formDisplay={"true"}
        headerContainer={"header_container"}
        titleText={"Results for: " + value}
      />
      <MovieList movies={movies} />
      <Footer />
    </div>
  )
}

export default Search
