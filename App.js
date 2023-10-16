import React from 'react';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Signup.js';



function App () {
  return (
      <BrowserRouter>
      <Routes>
          <Route path='/' element ={<Login/>}></Route>
          <Route path='/Signup' element ={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>

  )

}

export default App