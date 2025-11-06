import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import About from './components/About';
import Skills from './components/Skills'; // <-- Import it
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Education from './components/Education'; // <-- Import
import Projects from './components/Projects';
import Research from './components/Research';
import Publications from './components/Publications';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Testimonials />
        <Experience />
        <Education /> {/* <-- Add here */}
        <Projects />
        <Research />
        <Publications />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;