import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/client"
import Header from "../components/header/header"

export default function Home() {
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
    </>
  )
}
