import styles from "./listProductsMobile.module.css"
import Image from "next/image"

const ListProductsMobile = () => {
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
          <div className={styles.itemImage}>
            <Image
              src="/remera-basement-black.png"
              width={361}
              height={360}
            ></Image>
          </div>
          <div className={styles.descriptionPrice}>
            <p className={styles.itemDescription}> Black t-shirt </p>
            <p className={styles.itemDescription}> $7.95 </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListProductsMobile
