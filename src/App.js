import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={16}
        color="255,193,7"
        outerStyle={{
          border: "1px solid black",
          backgroundColor: "transparent",
        }}
        outerScale={1.5}
      />
      <Layout>
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
