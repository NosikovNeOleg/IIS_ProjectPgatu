import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WelcomeWindow from "@/windows/WelcomeWindow";

const inter = Inter({ subsets: ['latin'] })

declare global {
  var welcome : boolean
}



export default function Home() {

 

  return (
  
    <div>
      <Head>
        <title>IIS PGATU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <div>
         <WelcomeWindow/>
        </div>
        <Footer/>

    </div>
  
  )
}
