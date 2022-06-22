import React from "react"
import styles from "../styles/CategoriesPreview.module.css"

const CategoriesPreview = () => {
  const [categories, setCategories] = React.useState([])
  const API_KEY = process.env.API_KEY
  const API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

  const getCategoriesPreview = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()

    const categories = data.genres

    setCategories(categories)
    console.log(categories)
  }

  React.useEffect(() => {
    getCategoriesPreview()
  }, [])

  return (
    <section id="categoriesPreview" className={styles.categoriesPreview_container}>
      <h2 className={styles.categoriesPreview_title}>Categorías</h2>

      <article className={styles.categoriesPreview_list}>
        {categories.map((genre) => (
          <div key={genre.id} className={styles.category_container}>
            <h3 id={"id" + genre.id} className={styles.category_title}>
              {genre.name}
            </h3>
          </div>
        ))}

        {/* <div className={styles.category_container}>
          <h3 id="id14" className={styles.category_title}>
            Acción
          </h3>
        </div> */}
      </article>
    </section>
  )
}

export default CategoriesPreview
