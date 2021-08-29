import styles from "./listProductsMobile.module.css"
import Image from "next/image"

const ListProductsMobile = ({ products }) => {
  const addItem = (item) => {
    if (typeof window !== "undefined") {
      const itemsSaveLocally =
        JSON.parse(window.localStorage.getItem("cart")) || []
      itemsSaveLocally.push(item)
      window.localStorage.setItem("cart", JSON.stringify(itemsSaveLocally))
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerImgHeader}>
          <Image src="/header.svg" width={344} height={135}></Image>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            {"A man can't have enough basement swag."}
          </div>
        </div>

        <div className={styles.itemsContainer}>
          {products?.map((item, key) => (
            <div key={key} onClick={() => addItem(item)}>
              <div className={styles.itemImage}>
                <Image src={item.image} width={361} height={360}></Image>
              </div>
              <div className={styles.descriptionPrice}>
                <p className={styles.itemDescription}> {item.name} </p>
                <p className={styles.itemDescription}> ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListProductsMobile
