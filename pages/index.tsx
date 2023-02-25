import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer.tsx'
import Header from '@/components/Header.tsx'
import MainWindow from "@/components/MainWindow";
import {list_of_questions} from "@/questions/list_of_questions"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>IIS PGATU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header>
        </Header>
        <MainWindow>
        </MainWindow>
        <Footer>
        </Footer>

    </div>
  )
}
