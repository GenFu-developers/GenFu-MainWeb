import type { NextPage } from 'next'
import Head from 'next/head'
// custom components
import Navbar from '../components/Menu/Navbar'
import Hero from '../components/Hero/HeroHeader'
import Features from '../components/Features'
import WMUASection from '../components/Sections/WasMachtUnsAus'
import Steps from '../components/Steps'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Partner from '../components/Partner'
import { sanityClient } from '../sanity'
import { Alert } from '../typings'

interface Props {
  alert: Alert
}

export default function Home({ alert }: Props) {
  return (
    <div className='background-light dark:background-dark overflow-x-hidden'>
      < Head >
        <title>GenFu Webservice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head >
      <Navbar />
      <Hero alert={alert} />
      <WMUASection />
      <Partner />
      <Features />
      <Steps />
      <Team />
      <Footer />
    </div >
  )
}


export const getServerSideProps = async () => {
  const query = `*[_type == "landing-page-alert" && aktiv == true][0]{
     name,
     text,
     color,
     link,
     linkText,
    }`;

  const alert = await sanityClient.fetch(query);

  return {
    props: {
      alert: alert,
    }
  }
}