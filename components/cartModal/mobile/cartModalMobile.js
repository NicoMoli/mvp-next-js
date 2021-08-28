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
          <Image
            src={"/remera-basement-black.png"}
            width={98}
            height={97}
          ></Image>
        </div>
      </div>
    </>
  )
}

export default CartModalMobile
