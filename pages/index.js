import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })



//COMPONENTS
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);


  return (
   <div className="home_container">
    <Header/>
    <Main/>
   </div>
  )
}
