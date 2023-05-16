import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import Gallery from "./components/Gallery"
import AddSneaker from './scenes/AddSneaker';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Header/Header';
import Login from './scenes/Login';
import SignUpForm from './scenes/SignUpForm';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css';

function App() {

  const [sneakers, setSneakers] = useState()
  const [user, setUser] = useState(null)

  return (
   <>
   <BrowserRouter>
    <NavMenu user={user}/>
    <Header/>

    <Routes>
      <Route path='/AddSneaker' element={<AddSneaker setSneakers={setSneakers}/>}/>
      <Route path='/' element={<Home sneakers={sneakers} setSneakers={setSneakers}/>}/>
      <Route exact path='*' element={<Home sneakers={sneakers} setSneakers={setSneakers}/>}></Route>
      <Route path='/Login' element={<Login user={user} setUser={setUser}/>}/>
      <Route path='/Signup' element={<SignUpForm user={user} setUser={setUser}/>}/>
      <Route exact path='/Gallery' element={<Gallery />}></Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
