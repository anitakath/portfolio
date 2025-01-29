import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
import { useSelector } from 'react-redux'


//COMPONENTS
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer.js/Footer'


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  const currentLanguage = useSelector((state) => state.language)

  console.log(currentLanguage)

  const openMobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };



  return (
    <div className="home_container">
      {isHeaderVisible && (
         <Header
         openMobileMenuHandler={openMobileMenuHandler}
         showMobileMenu={showMobileMenu}
         setShowMobileMenu={setShowMobileMenu}
         isVisible={isVisible}
         setIsVisible={setIsVisible}
       />
      )}
     
      <Main
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setIsHeaderVisible={setIsHeaderVisible}
      />

      <Footer/>
    </div>
  );
}
