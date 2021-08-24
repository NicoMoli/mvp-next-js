import "../styles/globals.css"
import { Provider } from "next-auth/client"
import AuthGuard from "../helpers/hocs/auth"

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      {Component.requireAuth ? (
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  )
}

export default MyApp
