import { useState } from "react"
import CartModal from "../../cartModal/cartModal"
import CartModalDesktop from "../../cartModal/desktop/cartModalDesktop"
import CartModalMobile from "../../cartModal/mobile/cartModalMobile"
import styles from "./headerMobile.module.css"

const HeaderMobile = () => {
  const [openModal, setModal] = useState(false)
  const Toggle = () => setModal(!openModal)

  return (
    <>
      <div className={styles.container}>
        <div>
          <img
            src="/logo-basement-mobile.svg"
            width="28.85"
            height="40"
            className={styles.logoBasement}
          ></img>
        </div>
        <div>
          <button onClick={() => Toggle()} className={styles.buttonCart}>
            CART (1)
          </button>
        </div>
      </div>
      {openModal && (
        <CartModal selector="#cartModal">
          <CartModalMobile />
          <CartModalDesktop />
        </CartModal>
      )}
    </>
  )
}

export default HeaderMobile
