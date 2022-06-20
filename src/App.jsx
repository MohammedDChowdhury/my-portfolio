import NavBar from "./components/nav/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <Services />
    </div>
  );
}

export default App;
