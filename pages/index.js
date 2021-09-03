import { useEffect, useState } from "react"
// import { useRouter } from "next/router"
// import { useSession } from "next-auth/client"
import Header from "../components/header/header"
import ListProducts from "../components/list-products/listProducts"
import Footer from "../components/footer/footer"

export default function Home({ products }) {
  // Luego BORRAR lo referido a github login

  // Repo challenge a implementar
  // https://github.com/goncy/basement-challenge
  // Figma
  // https://www.figma.com/file/BYjaSbdPyhEL0ucneDlIQ0/Dev-Challenge?node-id=1%3A218

  // const [session, loading] = useSession()
  // const router = useRouter()
  const [cart, setCart] = useState(null)
  const [cartCount, setCartCount] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      let result = null
      const itemsStorage = JSON.parse(window.localStorage.getItem("cart"))

      if (itemsStorage?.length > 0) {
        result = reduceItems(itemsStorage)
      }

      setCartCount(result?.totalCount)
    }
  }, [])

  const addItem = (item) => {
    if (typeof window !== "undefined") {
      const itemsSaveLocally =
        JSON.parse(window.localStorage.getItem("cart")) || []
      itemsSaveLocally.push(item)
      window.localStorage.setItem("cart", JSON.stringify(itemsSaveLocally))
      const reduceResult = reduceItems(itemsSaveLocally)

      setCart(reduceResult.result)
      setCartCount(reduceResult.totalCount)
    }
  }

  const reduceItems = (items) => {
    let totalCountItems = null
    const result = [
      ...items
        .reduce((mp, item) => {
          if (!mp.has(item.id)) mp.set(item.id, { ...item, count: 0 })
          mp.get(item.id).count++
          return mp
        }, new Map())
        .values(),
    ]
    result?.forEach((item) => {
      totalCountItems += item.count
    })
    return { result: result, totalCount: totalCountItems }
  }

  // useEffect(() => {
  //   if (session && !loading) router.replace("/home")
  // }, [session, loading])

  return (
    <>
      <Header cartItems={cart} cartCount={cartCount} />
      <ListProducts products={products} addItem={addItem} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/api/products/getProductList")
    const products = await res.json()

    if (!products) {
      return {
        notFound: true,
      }
    }

    return {
      props: products, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      notFound: true,
      error: "Ha ocurrido un error inesperado, intente mas tarde!",
    }
  }
}
