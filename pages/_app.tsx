import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import PageTransition from '../components/Framer/PageTransition'
import { SessionProvider, useSession } from "next-auth/react"
import PermissionRoles from '../lib/PermissionRoles'
import Router from 'next/router'
import { redirect } from 'next/dist/server/api-utils'
import { useState, useEffect } from 'react'

const publicPages = ['/']

// const redirectPages = [
//   { path: '/login', redirect: '/api/auth/signin' }
// ]

function MyApp({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
  const [isSSRDone, setIsSSRDone] = useState(false)
  useEffect(
    function afterMount() {
      setIsSSRDone(true);
    },
    [],
  );
  // if (isSSRDone) {
  //   let redirecting = redirectPages.find(vendor => vendor.path === Router.pathname);;
  //   if (redirecting) return Router.push(redirecting.redirect)
  // }
  return (

    <SessionProvider session={session}>
      {/* @ts-ignore */}
      {Component.auth ? (
        // @ts-ignore
        <Auth auth={Component.auth}>
          <SessionProvider session={session}>
            <PageTransition key={router.route} >
              <ThemeProvider enableSystem={true} attribute="class">
                <Component {...pageProps} />
              </ThemeProvider>
            </PageTransition >
          </SessionProvider>
        </Auth>
      ) : (
        <SessionProvider session={session}>
          <PageTransition key={router.route} >
            <ThemeProvider enableSystem={true} attribute="class">
              <Component {...pageProps} />
            </ThemeProvider>
          </PageTransition >
        </SessionProvider>
      )}
    </SessionProvider>

  )
}

interface AuthProps {
  children: JSX.Element;
  auth: Object;
}

function Auth({ children, auth }: AuthProps) {
  const { status, data: session } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }
  // @ts-ignore
  else if (PermissionRoles[session.user.role] >= PermissionRoles[auth.role]) {
    return children
  }
  return <div>Hier gehts nicht weiter!</div>
}

export default MyApp
