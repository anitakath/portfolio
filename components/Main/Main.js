
//COMPONENTS
import AboutMe from './AboutMe.js'
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';

const Main = ({  isVisible, setIsVisible, setIsHeaderVisible }) => {
  return (
    <div className="container_main">
      <AboutMe
       
        isVisible={setIsVisible}
        setIsVisible={setIsVisible}
        setIsHeaderVisible={setIsHeaderVisible}
      />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Main;