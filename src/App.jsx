import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
