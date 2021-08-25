import ListProductsMobile from "../list-products/mobile/listProductsMobile"
import ListProductsDesktop from "../list-products/desktop/listProductsDesktop"

const ListProducts = () => {
  return (
    <>
      <ListProductsDesktop />
      <ListProductsMobile />
    </>
  )
}

export default ListProducts
