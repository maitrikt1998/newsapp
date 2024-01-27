import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar1 from './components/navbar1';
import Navbar2 from './components/navbar2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <Navbar2 />
        
        <div className="container">
          <div className="row">
            <Routes>
              <Route path='/' element={} />
              <Route path='/Entertainment' element={} />
              <Route path='/Technology' element={} />
              <Route path='/Sports' element={} />
              <Route path='/Business' element={} />
              <Route path='/Health' element={} />
              <Route path='/Science' element={} />

            </Routes>
            
          </div>
          
        </div>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
