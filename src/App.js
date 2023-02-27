
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Uplode from './Components/Uplode';
import Videos from './Components/Videos';

function App() {
  return (
   
    <Router>
      <Header></Header>
    
    <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/videos' element={<Videos></Videos>}></Route>
   <Route path='/uplode' element={<Uplode></Uplode>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/signup' element={<SignUp></SignUp>}></Route>
   <Route path='*' element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </Router>
   
    
   
  );
}

export default App;
