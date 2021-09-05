import styles from "./cartModalDesktop.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"

const CartModalDesktop = ({ itemsOnCart, setCart, close }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  let totalPriceItems = 0

  // TODO: MEJORAR ESTO!!! ver las dependencias
  useEffect(() => {
    itemsOnCart?.forEach((e) => {
      totalPriceItems += e.price
    })
    setTotalPrice(totalPriceItems)
  }, [])

  const changeQuantity = (type, item) => {
    const itemsStorage = JSON.parse(window.localStorage.getItem("cart"))
    delete item.count
    if (type === "add") {
      itemsStorage.push(item)
      window.localStorage.setItem("cart", JSON.stringify(itemsStorage))
    } else {
      const index = itemsStorage.findIndex((r) => r.id === item.id)
      index !== -1 && itemsStorage.splice(index, 1)
      window.localStorage.setItem("cart", JSON.stringify(itemsStorage))
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.closeIcon}>
          <Image
            onClick={() => close()}
            src={"/closeIcon.svg"}
            width={80}
            height={20}
          ></Image>
        </div>
        <div className={styles.yourCart}>
          <Image
            src={"/your-cart-desktop.svg"}
            width={344}
            height={214}
          ></Image>
        </div>

        {itemsOnCart?.map((item, key) => (
          <div key={key} className={styles.cartItem}>
            <div className={styles.itemImage}>
              <Image src={item.image} width={98} height={97}></Image>
            </div>
            <div className={styles.cartItemDescription}>
              <p className={[styles.text, styles.descriptionItem].join(" ")}>
                {item.name}
              </p>
              <p className={[styles.text, styles.descriptionSubItem].join(" ")}>
                {item.description}
              </p>
              <p className={styles.text}>QUANTITY: {item.count}</p>
              <button onClick={() => changeQuantity("add", item)}>
                ADD item
              </button>
              <button onClick={() => changeQuantity("remove", item)}>
                DELETE item
              </button>
              <p className={styles.text}>Size M</p>
              <p className={styles.text}>$ {item.price}</p>
            </div>
          </div>
        ))}

        <div className={styles.totalPrice}>
          <p>TOTAL</p>
          <p>$ {totalPrice}</p>
        </div>
        <div className={styles.footerImage}>
          <Image src={"/checkout.svg"} width={343} height={62}></Image>
        </div>
      </div>
    </>
  )
}

export default CartModalDesktop
