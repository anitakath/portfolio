
//COMPONENTS
import AboutMe from './AboutMe.js'
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';

const Main = () =>{


    return(
        <div className='container_main'>
           <AboutMe/>
           <Portfolio/>
           <Contact/>
        </div>
    )
}

export default Main;