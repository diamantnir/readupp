import React, { useContext, useState,useEffect }  from "react";
import loginimg from '../assets/images/login.png'
import accessibility from '../assets/icons/accessibility.svg'
import logo from '../assets/images/logo.png'
import {useNavigate } from 'react-router-dom'
import {LoginContext} from '../LoginContext';

export default function Loginrtl(){
{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [err,setErr] = useState('');
    const [forgetMsg,setForgetMsg] = useState('');
    const [translate,setTransate] = useState()   
    
    
    const navigate = useNavigate();

  const {loggedIn,setLoggedIn} = useContext(LoginContext);


  useEffect(() => {
    
    //  fetch('https://localhost:44318/api/UserSettings/GetReadupHe')
      fetch('https://api.readupp.com/api/UserSettings/GetReadupHe')
      .then(async response => {
          const data = await response.json();
          debugger;
          setTransate(data);
          
      })
      .catch(error => {
          
      });
  
      
     
      
  },[])


    const doLogin =()=>{
      localStorage.exp="none";
      setForgetMsg('')
      setErr(false)
        const credentials ={email,password}
        
      //  fetch('https://api.vayikra-bible.com/Login/login',{
        fetch('https://api.readupp.com/Login/login',{
     //   fetch('https://localhost:44318/Login/login',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(data =>
        {
            debugger;
            setErr(!data.ok);
            if(data.ok)
            {
              localStorage.loginDate = Date.now()
               localStorage.userId = data.usrId;
               localStorage.role = data.role;
               localStorage.email = data.email;
               if(data.exp==true)
                localStorage.exp="block";
                else
                localStorage.exp="none";
                  navigate('/booksrtl')
            }
        })
        .catch(() => {
          setErr(true);
        });
    }


    const doForget =()=>{
      setForgetMsg('')
      setErr(false)
      const credentials ={email,password}
      
      if(email=='')
      {
        setForgetMsg('Email is missing')
      }

    //  fetch('https://api.vayikra-bible.com/Login/login',{
      fetch('https://api.readupp.com/Login/forgot',{
   //   fetch('https://localhost:44318/Login/login',{
          method:'POST',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(credentials)
      })
      .then(response => response.json())
      .then(data =>
      {
          debugger;
          if(email!='')
          setErr(!data.res);
          if(data.res)
          {
            setForgetMsg('Email sent.')
          }
      })
      .catch(() => {
        if(email!='')
          setErr(true);
      });
  }
    

    return(<div className="login_container">
    <div className="form_container">
      <div className="d-flex justify-content-between">
        <div>
          {/* LANGUAGE CHANGER */}
          <details className="custom-select">
            <summary className="radios">
              <input type="radio" name="item" id="default" title="עברית" defaultChecked />
              <input type="radio" name="item" id="עברית" title="עברית" />
              <input type="radio" name="item" id="English" title="English" />
            </summary>
            <ul className="list">
              <li>
                <label className="d-flex align-items-center justify-content-between w-100" htmlFor="עברית">
                  <a className="text-decoration-none text-white d-flex align-items-center justify-content-between w-100 rtl" href="/loginrtl">
                    עברית
                  </a>
                </label>
              </li>
              <li>
                <label className="d-flex align-items-center justify-content-between w-100" htmlFor="English">
                  <a className="text-decoration-none text-white d-flex align-items-center justify-content-between w-100" href="/">
                    English
                  </a>
                </label>
              </li>
            </ul>
          </details>
          {/* LANGUAGE CHANGER */}
        </div>
        <a href='ACCESSIBILITY.pdf' className="d-flex align-items-center bg-transparent border-0 gap-2" >
          <img src={accessibility} />
          <p className="mb-0 color1 text-decoration-underline f14">
          {translate!=null?translate[0].value:'Accessibility statement'} 
          </p>
        </a>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <img src={logo} />
      </div>
      <h2 className="text-center mt-5 mb-1 f28 fw700 color1">{translate!=null?translate[1].value:'Welcom'}</h2>
      <p className="text-center fw600 color1 f22" >{translate!=null?translate[2].value:'Log in'} </p>
      <div className="login_form_inputs mt-5">
        <div className="container-fluid">
          <div className="row gy-2">
            <div className="col-12">
              <input className="w-100" type="text" name placeholder={translate!=null?translate[88].value:'E-mail'} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="col-12">
              <input className="w-100" type="password" name placeholder={translate!=null?translate[87].value:'Password'} value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            { err ?<div className="col-12">
              <span  className="w-100 red" type="text" name>{translate!=null?translate[100].value:'E-mail or password incorect'}</span>
            </div> : null }
            <div  className="w-100 red" type="text" name>{forgetMsg}</div>

            <div className="col-6 d-flex align-items-center gap-1 mt-4">
              <input type="checkbox" name />
              <p className="mb-0 f12 color11 pt-1">{translate!=null?translate[3].value:'Keep me logged'}  </p>
            </div>
            <div className="col-6 mt-4">
              <button className="w-100 bg_color1 text-white border-0" onClick={doLogin}>
              {translate!=null?translate[2].value:'Log in'} 
              </button>
            </div>
            <div className="col-6" />
            <div className="col-6">
              <div className="text-center mt-1" style={{'direction':'rtl'}}>
                <button className="color11 " style={{'border':'0px'}}  onClick={doForget}>{translate!=null?translate[4].value:'forgot password?'}</button>
              </div>
            </div>
            <div className="col-12 " style={{'margin-top':'0px !important','direction':'rtl'}}>
              <hr style={{'margin':'0px'}}/>
              <div className="d-flex gap-1 justify-content-center">
                <p className="color11 mb-0 f14">{translate!=null?translate[5].value:'Dont have an account?'}</p>
                <a className="color1 fw800 f14 register" href="/registerrtl">{translate!=null?translate[6].value:'Register'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="image_container d-none d-sm-block">
      <img src={loginimg} />
    </div>
  </div>

);
}

}