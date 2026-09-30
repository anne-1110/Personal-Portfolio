import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Project';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Process/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;






// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
 
//     </div>
//   );
// }

// export default App;
