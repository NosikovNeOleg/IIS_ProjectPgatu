import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainWindow from "@/components/MainWindow";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const Header = () => {}
  return (
    <div>
      <Head>
        <title>IIS PGATU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <MainWindow/>
        <Footer/>

    </div>
  )
}
