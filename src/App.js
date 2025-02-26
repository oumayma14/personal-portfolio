import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ToastContainer } from 'react-toastify';
import ParticlesComponent from "./components/ParticlesComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className="App">
      {/* NavBar */}
      <NavBar />
      {/*<div className="particles-container" >
        <ParticlesComponent />
      </div>*/}
      {/* Components */}
      <section id="home">
              <Banner />
            </section>
            <section id="skills" className='skills'>
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>

      <ToastContainer />
    </div>
  );
}

export default App;