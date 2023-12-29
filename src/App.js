import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Acceuil from './components/pages/Acceuil';
import Propos from './components/pages/Propos';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
function App(props) {
  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Acceuil/>}></Route>
              <Route path='/Propos' element={<Propos/>}></Route>
              <Route path='/Contact' element={<Contact/>}></Route>
              <Route path='/Service' element={<Service/>}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;