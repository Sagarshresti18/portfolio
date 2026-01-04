import Skills from "../components/Skills";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

function Home(){
    return(
        <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
        </>
    );
}
export default Home;