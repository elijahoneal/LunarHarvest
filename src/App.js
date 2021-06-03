import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
import Events from './pages/Events'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
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
