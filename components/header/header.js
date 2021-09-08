import HeaderMobile from "../header/mobile/headerMobile"
import HeaderDesktop from "../header/desktop/headerDesktop"
import { useState } from "react"
import CartModal from "../cartModal/cartModal"
import CartModalMobile from "../cartModal/mobile/cartModalMobile"
import CartModalDesktop from "../cartModal/desktop/cartModalDesktop"

const Header = ({ cartItems, cartCount, setCart, setCartCount }) => {
  const [openModal, setModal] = useState(false)

  const Toggle = () => {
    setModal(!openModal)
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "scroll"
    }
  }

  return (
    <>
      <HeaderDesktop totalItems={cartCount} toggle={Toggle} />
      <HeaderMobile totalItems={cartCount} toggle={Toggle} />

      {openModal && (
        <CartModal selector="#cartModal">
          <CartModalMobile
            itemsOnCart={cartItems}
            setCart={setCart}
            setCartCount={setCartCount}
            close={Toggle}
          />
          <CartModalDesktop
            itemsOnCart={cartItems}
            setCart={setCart}
            setCartCount={setCartCount}
            close={Toggle}
          />
        </CartModal>
      )}
    </>
  )
}

export default Header
