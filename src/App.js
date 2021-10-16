import './App.css';
import { SBar } from './components/SBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Photos from './pages/PhotoGallery'

function App() {
  return (
    <div className="App">
        <Router>
          <SBar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/photos' component={Photos}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
