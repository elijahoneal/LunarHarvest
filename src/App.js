import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Events from './components/Events'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';
import { Switch , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Switch>
        <Route path='/contact'>
            <Contact/>
          </Route>
        <Route path='/partners'>
            <Partners/>
          </Route>
        <Route path='/events'>
            <Events/>
          </Route>
        <Route path='/about'>
            <About/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
