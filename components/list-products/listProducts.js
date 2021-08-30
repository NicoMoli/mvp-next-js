import ListProductsMobile from "../list-products/mobile/listProductsMobile"
import ListProductsDesktop from "../list-products/desktop/listProductsDesktop"

const ListProducts = ({ products }) => {
  const addItem = (item) => {
    if (typeof window !== "undefined") {
      const itemsSaveLocally =
        JSON.parse(window.localStorage.getItem("cart")) || []
      itemsSaveLocally.push(item)
      window.localStorage.setItem("cart", JSON.stringify(itemsSaveLocally))
    }
  }

  return (
    <>
      <ListProductsDesktop />
      <ListProductsMobile products={products} addItem={addItem} />
    </>
  )
}

export default ListProducts
