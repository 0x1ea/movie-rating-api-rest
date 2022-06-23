import Link from "next/link"
import React from "react"
import styles from "../styles/CategoriesPreview.module.css"

const CategoriesPreview = ({ api }) => {
  const [categories, setCategories] = React.useState([])

  const getCategoriesPreview = async () => {
    const { data } = await api("/genre/movie/list")
    const categories = data.genres
    setCategories(categories)
  }

  React.useEffect(() => {
    getCategoriesPreview()
  }, [])

  return (
    <section id="categoriesPreview" className={styles.categoriesPreview_container}>
      <h2 className={styles.categoriesPreview_title}>Categories</h2>

      <article className={styles.categoriesPreview_list}>
        {categories.map((genre) => (
          <div key={genre.id} className={styles.category_container}>
            <h3 id={"id" + genre.id} className={styles.category_title}>
              <Link
                href={{
                  pathname: `/categories/${genre.name}`,
                  query: {
                    id: genre.id,
                    name: genre.name,
                  },
                }}
              >
                <a>{genre.name}</a>
              </Link>
            </h3>
          </div>
        ))}
      </article>
    </section>
  )
}

export default CategoriesPreview
