import './App.css';
import './assets/styles/login/login.css';


import './assets/styles/register/register.css';
import './assets/styles/account/account.css';

import Login from './Components/Login'
import Register from './Components/Register'
import Help from './Components/Help'
import Success from './Components/Success'
import Forget from './Components/Forget'
import Player from './Components/Player'
import Books from './Components/Books'
import Chapters from './Components/Chapters'
import Account from './Components/Account'
import Institute from './Components/Institute'

import Privacy from './Components/Privacy'
import Contacts from './Components/Contacts'


import Loginrtl from './Components/Login.rtl'
import Registerrtl from './Components/Register.rtl'
import Helprtl from './Components/Help.rtl'
import Successrtl from './Components/Success.rtl'
import Forgetrtl from './Components/Forget.rtl'
import Playerrtl from './Components/Player.rtl'
import Booksrtl from './Components/Books.rtl'
import Chaptersrtl from './Components/Chapters.rtl'
import Accountrtl from './Components/Account.rtl'
import Institutertl from './Components/Institute.rtl'

import Privacyrtl from './Components/Privacy.rtl'
import Contactsrtl from './Components/Contacts.rtl'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes ,BrowserRouter  } from 'react-router-dom'
import {React,useState} from 'react';
import PrivateRoutes from './PrivateRoute'
import {LoginContext} from './LoginContext';

import Test from './Components/test'
import Child from './Components/test2'


function App() {

  const [loggedIn,setLoggedIn] = useState(null);
  return (
    <div className="App">
  
  <BrowserRouter >
      <Routes>        
            <Route path="/register" element={<Register />}/>
            <Route path="/success" element={<Success />}/>  
            <Route path="/forget" element={<Forget/>} />      
            <Route path="/" element={<Login />}/>
            <Route element={<PrivateRoutes/>}>
              <Route path="/books" element={<Books/>} /> 
              <Route path="/chapters" element={<Chapters/>} /> 
              <Route path="/account" element={<Account/>} /> 
              <Route path="/institute" element={<Institute/>} /> 
              <Route path="/player" element={<Player/>} /> 
              <Route path="/privacy" element={<Privacy/>} /> 
              <Route path="/contacts" element={<Contacts/>} /> 
              <Route path="/help" element={<Help/>} /> 
              <Route path="/test" element={<Test/>} /> 
              <Route path="/test2" element={<Child/>} /> 

              
              </Route>

              <Route path="/booksrtl" element={<Booksrtl/>} /> 
              <Route path="/chaptersrtl" element={<Chaptersrtl/>} /> 
              <Route path="/accountrtl" element={<Accountrtl/>} /> 
              <Route path="/institutertl" element={<Institutertl/>} /> 
              <Route path="/playerrtl" element={<Playerrtl/>} /> 
              <Route path="/privacyrtl" element={<Privacyrtl/>} /> 
              <Route path="/contactsrtl" element={<Contactsrtl/>} /> 
              <Route path="/helprtl" element={<Helprtl/>} /> 

              <Route path="/registerrtl" element={<Registerrtl />}/>
            <Route path="/successrtl" element={<Successrtl />}/>  
            <Route path="/forgetrtl" element={<Forgetrtl/>} />      
            <Route path="/Loginrtl" element={<Loginrtl />}/>
          
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;


