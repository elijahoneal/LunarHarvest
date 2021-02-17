import Home from './components/Home'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
