import { signOut, useSession } from "next-auth/client"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Home() {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session && !loading) router.push("/")
  }, [session, loading])

  if (typeof window !== "undefined" && loading) return null

  return (
    <>
      <h1>HOLA PAGINA HOME!!!</h1>
      <div>{<button onClick={signOut}>LogOut GitHub</button>}</div>
    </>
  )
}
