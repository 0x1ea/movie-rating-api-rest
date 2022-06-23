import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MovieList from "../components/MovieList"
import { useRouter } from "next/router"
import Head from "next/head"
const Search = () => {
  const router = useRouter()
  const { value } = router.query
  console.log(value)
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
        titleText={value}
      />
      <MovieList />
      <Footer />
    </div>
  )
}

export default Search
