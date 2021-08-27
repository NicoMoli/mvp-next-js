import ListProductsMobile from "../list-products/mobile/listProductsMobile"
import ListProductsDesktop from "../list-products/desktop/listProductsDesktop"

const ListProducts = ({ products }) => {
  return (
    <>
      <ListProductsDesktop />
      <ListProductsMobile products={products} />
    </>
  )
}

export default ListProducts
