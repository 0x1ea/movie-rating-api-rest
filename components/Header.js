import React from "react"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header id="header" className={styles.header_container}>
      <span className={styles.header_arrow} style={{ display: "none" }}>
        &lt;
      </span>
      <h1 className={styles.header_title}>Movie Rating</h1>
      <h1
        className={
          styles.header_title
        } /* className="header_title header_title__categoryView inactive" */
        style={{ display: "none" }}
      >
        Action
      </h1>

      <form id="searchForm" className={styles.header_searchForm}>
        <input type="text" placeholder="Vengadores" />
        <button>🔍</button>
      </form>
    </header>
  )
}

export default Header
