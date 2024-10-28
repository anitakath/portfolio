import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



//COMPONENTS
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'

export default function Home() {
  return (
   <div className="home_container">
    <Header/>
    <Main/>
   </div>
  )
}
