import type { NextPage } from 'next'
import Head from 'next/head'

// custom components
import Navbar from '../components/Navbar'
import Header from '../components/Hero/HeroHeader'
import Features from '../components/Features'
import Product from '../components/Product'
import Steps from '../components/Steps'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Partner from '../components/Partner'


export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Head>
        <title>GenFu Webservice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Product />
      <Partner />
      <Features />
      <Steps />
      <Team />
      <Footer />
    </div >
  )
}
