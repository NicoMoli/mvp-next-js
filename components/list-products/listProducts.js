import ListProductsMobile from "../list-products/mobile/listProductsMobile"
import ListProductsDesktop from "../list-products/desktop/listProductsDesktop"

const ListProducts = ({ products, addItem }) => {
  return (
    <>
      <ListProductsDesktop />
      <ListProductsMobile products={products} addItem={addItem} />
    </>
  )
}

export default ListProducts
