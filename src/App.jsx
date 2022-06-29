import NavBar from "./components/nav/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <Experience/>
      <Projects/>
      <Contact />

    </div>
  );
}

export default App;
