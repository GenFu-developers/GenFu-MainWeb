import type { NextPage } from 'next';
import Head from 'next/head';
// custom components
import Navbar from '../components/Menu/Navbar';
import Hero from '../components/Hero/index';
import Features from '../components/Features';
import WMUASection from '../components/Sections/WasMachtUnsAus';
import Steps from '../components/Steps/index';
import Footer from '../components/Footer/Footer';
import Team from '../components/Team/index';
import Partner from '../components/Partner';
import { sanityClient } from '../sanity';
import { Alert } from '../typings';
import AlertComponent from '../components/Alert/LandingPageAlert';
import Faq from '../components/Sections/FAQ';
import { useSession } from 'next-auth/react';
import PermissionRoles from '../lib/PermissionRoles';

interface Props {
  alert: Alert
}


export default function Home({ alert }: Props) {
  const { data: session } = useSession()
  return (
    <div className='background-light dark:background-dark overflow-x-hidden'>
      < Head >
        <title>GenFu Webservice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head >
      <AlertComponent alert={alert} />
      {
        // @ts-ignore
        PermissionRoles[session?.user?.role] >= PermissionRoles['staff'] &&
        <AlertComponent alert={
          {
            name: 'GenFu Workspace Alert',
            text: 'Ich sehe du bist berechtigt zu Arbeiten :)',
            link: '/workspace/home',
            linkText: 'GenFu Workspace'
          }
        } />
      }
      <Navbar />
      <Hero />
      <div className="flex flex-col">
        <WMUASection />
        <Partner />
        <Features />
        <Steps />
        <Team />
        <Faq />
      </div>
      <div className=''>
        <Footer />
      </div>
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