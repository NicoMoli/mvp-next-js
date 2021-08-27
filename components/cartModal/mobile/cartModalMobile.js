import styles from "./cartModalMobile.module.css"
import Image from "next/image"

const CartModalMobile = () => {
  return (
    <>
      <div className={styles.container}>
        <Image src={"/closeIcon.svg"} width={80} height={20}></Image>
      </div>
    </>
  )
}

export default CartModalMobile
