import styles from "./cartModalMobile.module.css"
import Image from "next/image"

const CartModalMobile = ({ close }) => {
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
          <Image src={"/your-cart.svg"} width={344} height={214}></Image>
        </div>
        <div className={styles.cartItem}>
          <div className={styles.itemImage}>
            <Image
              src={"/remera-basement-black.png"}
              width={98}
              height={97}
            ></Image>
          </div>
          <div className={styles.cartItemDescription}>
            <p className={[styles.text, styles.descriptionItem].join(' ')}>Black T-Shirt</p>
            <p className={[styles.text, styles.descriptionSubItem].join(' ')}>Unisex black soft style</p>
            <p className={styles.text}>QUANTITY: 3</p>
            <p className={styles.text}>Size M</p>
            <p className={styles.text}>$ 12</p>
          </div>
        </div>
        <div className={styles.totalPrice}>
          <p>TOTAL</p>
          <p>$ 37.50</p>
        </div>
        <div className={styles.footerImage}>
          <Image src={'/checkout.svg'} width={343} height={62}></Image>
        </div>
      </div>
    </>
  )
}

export default CartModalMobile
