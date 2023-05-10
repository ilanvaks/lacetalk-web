import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import Gallery from "./components/Gallery"
import AddSneaker from './scenes/AddSneaker';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css';

function App() {

  const [sneakers, setSneakers] = useState()


  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/addsneaker' element={<AddSneaker setSneakers={setSneakers}/>}/>
      <Route path='/' element={<Home sneakers={sneakers} setSneakers={setSneakers}/>}/>
      <Route exact path='*' element={<Home sneakers={sneakers} setSneakers={setSneakers}/>}></Route>
      <Route exact path='/Gallery' element={<Gallery />}></Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
