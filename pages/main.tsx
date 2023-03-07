import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainWindow from "@/windows/MainWindow";

const inter = Inter({ subsets: ['latin'] })

declare global {
  var welcome : boolean
}



export default function Home() {


 

  return (
    
    <div className="background">
      <Head>
        <title>IIS PGATU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <div>
        <MainWindow/>
        
        </div>
        
        <Footer/>

    </div>
    
  )
}
