import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Sections/Home';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
            <Home />
        </div>
      </main>
    </div>
  );
}

export default App;
