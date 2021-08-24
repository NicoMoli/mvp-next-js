import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSession, signIn } from "next-auth/client"
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import styles from "../styles/Home.module.css"

export default function Home() {
  const [session, loading] = useSession()
  const router = useRouter()
  const formBackground = useColorModeValue("gray.100", "gray.400")

  useEffect(() => {
    if (session && !loading) router.replace("/home")
  }, [session, loading])

  return (
    <div>
      {!session && !loading && (
        <Flex className={styles.container}>
          <Flex
            className={styles.loginContainer}
            direction="column"
            background={formBackground}
            p={12}
            rounded={12}
          >
            <Text fontSize="3xl" mb={10}>
              Log In Options
            </Text>
            <Button
              colorScheme="teal"
              onClick={(e) => {
                e.preventDefault()
                signIn(null, {
                  callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/home`,
                })
              }}
            >
              Log in with GitHub
            </Button>
          </Flex>
        </Flex>
      )}
    </div>
  )
}
