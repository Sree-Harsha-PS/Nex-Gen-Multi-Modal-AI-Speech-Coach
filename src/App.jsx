import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
// import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Join from './Components/Join/Join';
import Contact from './Components/Contact/Contact';
import TextEditor from './Components/Text/Editor';
import Vid from './Components/Vid/Vid'
import Chatbot from './Components/Text/Chatbot';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <TextEditor />
      <Chatbot />
      <Vid />
      <Reasons/>
      <Plans/>
      {/* <Testimonials/> */}
      <Join/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
