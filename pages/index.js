import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect} from 'react'
const inter = Inter({ subsets: ['latin'] })
import { useSelector } from 'react-redux'
import { supabase } from '@/services/supabaseClient'

//COMPONENTS
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer.js/Footer'

//REDUX
import { useDispatch } from 'react-redux'
import { setInitialData } from '@/store/dataSlice'

export default function Home({initialData}) {
  const [isVisible, setIsVisible] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  const currentLanguage = useSelector((state) => state.language)

  console.log(currentLanguage)

  const openMobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };


  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch die initialData in den Redux-Store
    dispatch(setInitialData(initialData));
  }, [dispatch, initialData]);



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


// Fetch data for each language and pass it to the component as props
export async function getStaticProps() {
  const languages = ['GERMAN', 'ENGLISH', 'SPANISH'];
  const allData = {};

  for (const language of languages) {
    const { data: portfolioData, error } = await supabase.from(`portfolio_${language.toLowerCase()}`).select('*');

    if (error) {
      console.error('Supabase Error:', error);
      return { notFound: true }; // Return a 404 page if there's an error
    }

    allData[language] = portfolioData;
  }

  return {
    props: {
      initialData: allData,
    },
    revalidate: 86400, // Revalidate once every day (24 hours)
  };
}