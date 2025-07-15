import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
