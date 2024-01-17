import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <Layout>
      <Home />
      <Skills />
      <Projects />
    </Layout>
  );
}

export default App;
