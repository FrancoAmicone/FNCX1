import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavBar from './components/comp/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';




function App() {

  const location = useLocation();

  return (
  <>
      <NavBar/>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
     
      </AnimatePresence>
     





  </>
  );
}

export default App;
