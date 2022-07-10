import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import PageTransition from '../components/Framer/PageTransition'
import { SessionProvider } from "next-auth/react"

const publicPages = ['']

function MyApp({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
  return (
    <SessionProvider session={session}>
      <PageTransition key={router.route} >
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
          {/* {publicPages.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <>
              <SignedIn>
              </SignedIn>
              <SignedOut>
                <main>
                  <p>
                    Please{" "}
                    <Link href="/sign-in">
                      <a>sign in</a>
                    </Link>{" "}
                    to access this page.
                  </p>
                </main>
              </SignedOut>
            </>
          )} */}
        </ThemeProvider>
      </PageTransition >
    </SessionProvider>
  )
}

export default MyApp
