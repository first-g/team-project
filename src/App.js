import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About/About'
import Quotes from './components/Quotes/Quotes'
import Pomodoro from './components/Pomodoro/Pomodoro'
import Timer from './components/Timer/Timer'
import Clicker from './components/Clicker/Clicker'

import QuoteFact from './components/Quotes/QuoteFact';

function App() {
  return (
    <div className="App">
      <Router basename='/team-project'>

        <Navigation />

        <div className='app__content'>
          <div className='container'>
            <Routes>
                <Route path='/' element={<About/>}></Route>
                <Route path='/quotes/*' element={<Quotes/>}>
                  <Route path='fact' element={<QuoteFact />}/>
                </Route>
                <Route path='/pomodoro' element={<Pomodoro/>}></Route>
                <Route path='/timer' element={<Timer hours={1} minutes={45}/>}></Route>
                <Route path='/clicker' element={<Clicker/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
