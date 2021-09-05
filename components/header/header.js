import HeaderMobile from "../header/mobile/headerMobile"
import HeaderDesktop from "../header/desktop/headerDesktop"
import { useState } from "react"
import CartModal from "../cartModal/cartModal"
import CartModalMobile from "../cartModal/mobile/cartModalMobile"
import CartModalDesktop from "../cartModal/desktop/cartModalDesktop"

const Header = ({ cartItems, cartCount, setCart }) => {
  const [openModal, setModal] = useState(false)
  const Toggle = () => setModal(!openModal)

  return (
    <>
      {!openModal ? (
        <>
          <HeaderDesktop totalItems={cartCount} toggle={Toggle} />
          <HeaderMobile totalItems={cartCount} toggle={Toggle} />
        </>
      ) : (
        <CartModal selector="#cartModal">
          <CartModalMobile
            itemsOnCart={cartItems}
            setCart={setCart}
            close={Toggle}
          />
          <CartModalDesktop
            itemsOnCart={cartItems}
            setCart={setCart}
            close={Toggle}
          />
        </CartModal>
      )}
    </>
  )
}

export default Header
