import styles from "./headerDesktop.module.css"
import Image from "next/image"

const HeaderDesktop = ({ totalItems, toggle }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={"/basement-logo.svg"} width={192} height={28}></Image>
        </div>
        <div className={styles.groupIcons}>
          <Image src={"/icons-group.svg"} width={284} height={25}></Image>
        </div>
        <div>
          <button onClick={() => toggle()} className={styles.buttonCart}>
            {totalItems ? `CART (${totalItems}) ` : "CART (0)"}
          </button>
        </div>
      </div>
    </>
  )
}

export default HeaderDesktop
