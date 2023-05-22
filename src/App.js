import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import Gallery from "./components/Gallery"
import AddSneaker from './scenes/AddSneaker';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Header/Header';
import Login from './scenes/Login';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import SignUpForm from './scenes/SignUpForm';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBXx4a0qXtMEOhHsqDjEOgvu_tyCtDcA9c",
    authDomain: "lacetalk-web-iv.firebaseapp.com",
    projectId: "lacetalk-web-iv",
    storageBucket: "lacetalk-web-iv.appspot.com",
    messagingSenderId: "16978065296",
    appId: "1:16978065296:web:35f905c632c7d903dda515"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app)

  const [sneakers, setSneakers] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      console.log('Showing user');
      console.log(currentUser);
    });
  },[]);

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   if (token) {
  //     auth.setSession(token);
  //   }
  // }, []);

  return (
   <>
   <BrowserRouter>
    <NavMenu user={user} setUser={setUser}/>

    <Routes>
      {!user 
      ?<Route path='/AddSneaker' element={<Login user={user} setUser={setUser} />}/>
      : <Route path='/AddSneaker' element={<AddSneaker setSneakers={setSneakers} />}/>
      }
      <Route path='/Login' element={<Login user={user} setUser={setUser}/>} />      
      <Route path='/Signup' element={<SignUpForm user={user} setUser={setUser}/>} />

      {/* <Route path='/' element={<Home sneakers={sneakers} setSneakers={setSneakers}/>} /> */}
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Home sneakers={sneakers} setSneakers={setSneakers}/>} />
    </Routes>
   </BrowserRouter>
   <Footer/>
   </>
  );
}

export default App;
