import "./index.css";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          padding: "2rem",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Intro />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
