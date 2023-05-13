import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import Gallery from "./components/Gallery"
import AddSneaker from './scenes/AddSneaker';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Header/Header';
import Login from './scenes/Login';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css';

function App() {

  const [sneakers, setSneakers] = useState()


  return (
   <>
   <HashRouter>
    <NavMenu />
    <Header/>

    <Routes>
      <Route path='/AddSneaker' element={<AddSneaker setSneakers={setSneakers}/>}/>
      <Route path='/' element={<Home sneakers={sneakers} setSneakers={setSneakers}/>}/>
      <Route exact path='*' element={<Home sneakers={sneakers} setSneakers={setSneakers}/>}></Route>
      <Route path='/Login' element={<Login />}/>
      <Route exact path='/Gallery' element={<Gallery />}></Route>
    </Routes>
   </HashRouter>
   </>
  );
}

export default App;
