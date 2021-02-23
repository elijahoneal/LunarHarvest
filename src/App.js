import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import './App.css';
import { Switch , Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Switch>
        <Route path='/about'>
            <About/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
