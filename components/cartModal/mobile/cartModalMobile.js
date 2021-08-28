import styles from "./cartModalMobile.module.css"
import Image from "next/image"

const CartModalMobile = ({ close }) => {
  return (
    <>
      <div className={styles.container}>
        <Image
          className={styles.closeIcon}
          onClick={() => close()}
          src={"/closeIcon.svg"}
          width={80}
          height={20}
        ></Image>
        <Image src={"/your-cart.svg"} width={344} height={214}></Image>
      </div>
    </>
  )
}

export default CartModalMobile
