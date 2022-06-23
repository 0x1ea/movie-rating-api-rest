import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MovieList from "../../components/MovieList"
import Head from "next/head"
import { useRouter } from "next/router"
import { useApi } from "../../utils/useApi"

const Genre = () => {
  const router = useRouter()
  const [movies, setMovies] = React.useState([])
  const { id, name } = router.query
  const { api } = useApi()

  const getMovies = async () => {
    const { data } = await api("/discover/movie", {
      params: {
        with_genres: id,
      },
    })
    console.log(data.results)
    setMovies(data.results)
  }

  React.useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <Head>
        <title>Categories</title>
        <meta name="description" content="Movie Rating App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        title={["true", "true", "none"]}
        formDisplay={"none"}
        headerContainer={"header_container"}
        titleText={name}
      />

      <MovieList movies={movies} />
      <Footer />
    </div>
  )
}

export default Genre
