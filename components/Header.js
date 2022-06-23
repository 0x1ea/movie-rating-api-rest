import React from "react"
import styles from "../styles/Header.module.css"
import Link from "next/link"
const Header = ({ title, formDisplay, headerContainer, titleText, image }) => {
  const [searchValue, setSearchValue] = React.useState("")
  return (
    <header
      id="header"
      className={styles[headerContainer]}
      style={
        headerContainer === "header_container__long"
          ? {
              backgroundImage: `url("https://image.tmdb.org/t/p/w500${image}")`,
            }
          : null
      }
    >
      <span className={styles.header_arrow} style={{ display: title[0] }}>
        <Link href="/">
          <a>&lt;</a>
        </Link>
      </span>
      <h1 className={styles["header_title"]} style={{ display: title[1] }}>
        {titleText ? titleText : "Movie Rating"}
      </h1>
      <h1
        className={
          styles["header_title"]
        } /* className="header_title header_title__categoryView inactive" */
        style={{ display: title[2] }}
      >
        Action
      </h1>

      <form id="searchForm" style={{ display: formDisplay }} className={styles.header_searchForm}>
        <input
          type="text"
          placeholder="Vengadores"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Link href={{ pathname: "/search", query: { value: searchValue } }}>
          <a>
            <button>🔍</button>
          </a>
        </Link>
      </form>
    </header>
  )
}

export default Header
