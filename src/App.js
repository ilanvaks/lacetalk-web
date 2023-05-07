import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css';
import AddSneaker from './scenes/AddSneaker';

function App() {

  const [sneakers, setSneakers] = useState()


  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/addsneaker' element={<AddSneaker setSneakers={setSneakers}/>}/>
      <Route path='/' element={<Home sneakers={sneakers} setSneakers={setSneakers}/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
