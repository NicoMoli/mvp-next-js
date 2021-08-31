import { useState } from "react"
import CartModal from "../../cartModal/cartModal"
import CartModalDesktop from "../../cartModal/desktop/cartModalDesktop"
import CartModalMobile from "../../cartModal/mobile/cartModalMobile"
import styles from "./headerMobile.module.css"

const HeaderMobile = ({ totalItems }) => {
  const [openModal, setModal] = useState(false)
  const Toggle = () => setModal(!openModal)

  return (
    <>
      {!openModal ? (
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
              {totalItems ? `CART (${totalItems}) ` : "CART (0)"}
            </button>
          </div>
        </div>
      ) : (
        <CartModal selector="#cartModal">
          <CartModalMobile close={Toggle} />
          <CartModalDesktop close={Toggle} />
        </CartModal>
      )}
    </>
  )
}

export default HeaderMobile
