import styles from "./listProductsDesktop.module.css"
import Image from "next/image"

const ListProductsDesktop = ({ products, addItem }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <Image src={"/header.svg"} width={1376} height={365}></Image>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            {"A man can't have enough basement swag."}
          </div>
        </div>
        <div className={styles.itemsContainer}>
          {products?.map((item, key) => (
            <div
              key={key}
              onClick={() => addItem(item)}
              className={styles.item}
            >
              <div className={styles.itemImage}>
                <Image src={item.image} width={361} height={360}></Image>
                <div className={styles.addToCart}>
                  <Image
                    src={"/add-to-cart.svg"}
                    width={245}
                    height={128}
                  ></Image>
                </div>
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

export default ListProductsDesktop
