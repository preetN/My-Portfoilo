import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Layout/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={16}
        color="255,193,7"
        outerStyle={{
          border: "1px solid black",
          backgroundColor: "transparent",
        }}
        outerScale={1.5}
      /> */}
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
