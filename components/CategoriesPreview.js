import React from "react"
import styles from "../styles/CategoriesPreview.module.css"
const CategoriesPreview = () => {
  return (
    <section id="categoriesPreview" className={styles.categoriesPreview_container}>
      <h2 className={styles.categoriesPreview_title}>Categorías</h2>

      <article className={styles.categoriesPreview_list}>
        <div className={styles.category_container}>
          <h3 id="id28" className={styles.category_title}>
            Romance
          </h3>
        </div>

        <div className={styles.category_container}>
          <h3 id="id16" className={styles.category_title}>
            Drama
          </h3>
        </div>

        <div className={styles.category_container}>
          <h3 id="id14" className={styles.category_title}>
            Acción
          </h3>
        </div>
      </article>
    </section>
  )
}

export default CategoriesPreview
