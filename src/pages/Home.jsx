import Skills from "../components/Skills";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home(){
    return(
        <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        </>
    );
}
export default Home;