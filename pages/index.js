import React from "react"
import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Trendring from "../components/Trendring"
import CategoriesPreview from "../components/CategoriesPreview"
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

  const title = ["none", "true", "none"]

  return (
    <div>
      <Head>
        <title>Movie Rating</title>
        <meta name="description" content="Movie Rating App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title={title} formDisplay={"true"} headerContainer={"header_container"} />

      <Trendring api={api} />
      {/* <MovieDetail /> */}

      <CategoriesPreview api={api} />

      <Footer />
    </div>
  )
}
