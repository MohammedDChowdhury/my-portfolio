import NavBar from "./components/nav/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <Projects/>

    </div>
  );
}

export default App;
