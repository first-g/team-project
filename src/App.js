import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { data } from './data/data'

function App() {
  return (
    <div className="App">
      <Router>

        <Navigation />

        <div className='app__content'>
          <div className='container'>
            <Routes>
              {data.map(el => (
                <Route key={el.name} path={el.path} element={el.element} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
