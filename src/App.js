
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

import OneOfAll from './pages/OneOfAll';
import Last from './pages/Last';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/celiLast' element={<OneOfAll />} />
        <Route path='/celiOne' element={<Last />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
