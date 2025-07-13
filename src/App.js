import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Sections/Home';
import Scroll from './components/Scroll';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
            <Home />
            <Scroll />
        </div>
      </main>
    </div>
  );
}

export default App;
