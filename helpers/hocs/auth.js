import { useSession } from "next-auth/client"
import { useRouter } from "next/router"

const AuthGuard = ({ children }) => {
  // checks whether we are on client / browser or server.
  if (typeof window !== "undefined") {
    const router = useRouter()
    const [session, loading] = useSession()

    if (!session && loading) {
      return null
    } else if (!session && !loading) {
      router.replace("/")
    }

    return <>{children}</>
  }

  // If we are on server, return null
  return null
}

export default AuthGuard
