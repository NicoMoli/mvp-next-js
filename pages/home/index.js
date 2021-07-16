import { signOut } from "next-auth/client"
// import { useEffect } from "react"
// import { useRouter } from "next/router"

const Home = () => {
  return (
    <>
      <h1>HOLA PAGINA HOME!!!</h1>
      <div>{<button onClick={signOut}>LogOut GitHub</button>}</div>
    </>
  )
}

Home.requireAuth = true
export default Home
