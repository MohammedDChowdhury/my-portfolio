import NavBar from "./components/nav/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <Projects/>
      <Contact />

    </div>
  );
}

export default App;
