import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar1 from './components/navbar1';
import Navbar2 from './components/navbar2';
import News from './components/news';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <Navbar2 />
        
        <div className="container">
          <div className="row">
            <Routes>
              <Route path='/' element={<News key="general" category="general" />} />
              <Route path='/Entertainment' element={<News key="entertainment" category="entertainment" />} />
              <Route path='/Technology' element={<News key="technology" category="technology" />} />
              <Route path='/Sports' element={<News key="sports" category="sports" />} />
              <Route path='/Business' element={<News key="business" category="business" />} />
              <Route path='/Health' element={<News key="health" category="health" />} />
              <Route path='/Science' element={<News key="science" category="science" />} />

            </Routes>
            
          </div>
          
        </div>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
