
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

import OneOfAll from './pages/OneOfAll';
import Last from './pages/Last';
import Speakers from './Speakers/Math';
import Click from './pages/Click';
import Massenger from './pages/massenger';
import Likes from './pages/likes';
import Drinks from './pages/drinks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/celiLast' element={<OneOfAll />} />
        <Route path='/celiOne' element={<Last />} />
        <Route path='/speaker' element={<Speakers />} />
        <Route path='/Click' element={<Click />}/>
        <Route path='/Massenger' element={<Massenger />} />
        <Route path='/Likes' element={<Likes />} />
        <Route path='/Drinks' element={<Drinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
