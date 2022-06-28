import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import PageTransition from '../components/Framer/PageTransition'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <PageTransition key={router.route} >
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </PageTransition>
  )
}

export default MyApp
