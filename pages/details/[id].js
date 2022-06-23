import React from "react"
import MovieDetail from "../../components/MovieDetail"
import { useRouter } from "next/router"
import Header from "../../components/Header"
import Head from "next/head"

const Details = () => {
  const router = useRouter()
  const { name, description, rating, image, genres } = router.query

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Movie Rating App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        title={["true", "none", "none"]}
        formDisplay={"none"}
        headerContainer={"header_container__long"}
        image={image}
      />
      <MovieDetail name={name} description={description} rating={rating} genres={genres} />
      {/* <Footer /> */}
    </>
  )
}

export default Details
