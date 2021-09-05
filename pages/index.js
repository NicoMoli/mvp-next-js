import { useEffect, useState } from "react"
// import { useRouter } from "next/router"
// import { useSession } from "next-auth/client"
import Header from "../components/header/header"
import ListProducts from "../components/list-products/listProducts"
import Footer from "../components/footer/footer"
import reduceProducts from "../helpers/hocs/utils/reduceProducts"

export default function Home({ products }) {
  // Luego BORRAR lo referido a github login

  // Repo challenge a implementar
  // https://github.com/goncy/basement-challenge
  // Figma
  // https://www.figma.com/file/BYjaSbdPyhEL0ucneDlIQ0/Dev-Challenge?node-id=1%3A218

  // const [session, loading] = useSession()
  // const router = useRouter()
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      let result = null
      const itemsStorage = JSON.parse(window.localStorage.getItem("cart"))

      if (itemsStorage?.length > 0) {
        result = reduceProducts(itemsStorage)
        setCart(result.items)
        setCartCount(result?.totalCount)
      }
    }
  }, [])

  const addItem = (item) => {
    if (typeof window !== "undefined") {
      const itemsSaveLocally =
        JSON.parse(window.localStorage.getItem("cart")) || []
      itemsSaveLocally.push(item)
      window.localStorage.setItem("cart", JSON.stringify(itemsSaveLocally))

      const reduceResult = reduceProducts(itemsSaveLocally)
      setCart(reduceResult.items)
      setCartCount(reduceResult.totalCount)
    }
  }

  // useEffect(() => {
  //   if (session && !loading) router.replace("/home")
  // }, [session, loading])

  return (
    <>
      <Header cartItems={cart} setCart={setCart} cartCount={cartCount} />
      <ListProducts products={products} addItem={addItem} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  try {
    // TODO: Read URL from .env
    const res = await fetch(
      "https://mvp-next-js.vercel.app/api/products/getProductList"
    )
    const products = await res.json()

    if (!products) {
      return {
        props: { notFound: true },
      }
    }

    return {
      props: products, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: {
        notFound: true,
        error: "Ha ocurrido un error inesperado, intente mas tarde!",
      },
    }
  }
}
