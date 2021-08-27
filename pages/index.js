import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/client"
import Header from "../components/header/header"
import ListProducts from "../components/list-products/listProducts"
import Footer from "../components/footer/footer"

export default function Home({ products }) {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session && !loading) router.replace("/home")
  }, [session, loading])

  // Repo challenge a implementar
  // https://github.com/goncy/basement-challenge
  // Figma
  // https://www.figma.com/file/BYjaSbdPyhEL0ucneDlIQ0/Dev-Challenge?node-id=1%3A218

  return (
    <>
      <Header />
      <ListProducts products={products} />
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
  } catch (error) {}
}
