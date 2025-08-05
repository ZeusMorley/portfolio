import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Scroll from './components/Scroll';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
            <Home />
            <Scroll to="about"/>
            <About />
            <Scroll to="experience"/>
            <Experience />
            <Scroll to ="skills"/>
            <Skills/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
