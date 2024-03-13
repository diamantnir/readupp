import React, { useContext, useState,useEffect,ChangeEvent }  from "react";

import hamburger from '../assets/icons/hamburger.svg'
import logolight from '../assets/images/logo-light.png'
import logo2 from '../assets/images/logo2.svg'
import avatar from '../assets/icons/avatar.svg'
import userAvtr from '../assets/icons/userAvtr.svg'
import cal2 from '../assets/icons/cal2.svg'
import '../assets/styles/institute/institute.css';

import search from '../assets/icons/search.svg'
import accessibility from '../assets/icons/accessibility-light.svg'
import back from '../assets/icons/back.svg'
import copy from '../assets/icons/copy.svg'
import cal from '../assets/icons/cal.svg'
import message from '../assets/icons/message.svg'
import question from '../assets/icons/question.svg'
import book from '../assets/icons/book.svg'
import timer from '../assets/icons/timer.svg'
import upload from '../assets/icons/upload.svg'
import {useNavigate } from 'react-router-dom'
import needHelp from "../assets/images/needHelp.svg"

import menuCross from "../assets/images/menuCross.svg"
import menuICon from "../assets/images/menuICon.png"
import icons8down48 from "../assets/images/icons8-down-48.png"


export default function Institute(){

  const navigate = useNavigate();

    let [imageLogo,setImageLogo] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [address,setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [tel,setTel] = useState('');
    const [gender,setGender] = useState('');
    const [country,setCountry] = useState('');
    const [city,setCity] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');
    const [guid,setGuid] = useState('');
    const [subscribeLastDateString,setSubscribeLastDateString] = useState('');
    const [chaptersCounter,setChaptersCounter] = useState('');
    const [readTimer,setReadTimer] = useState('');
    const [subscriptionCount,setSubscriptionCount] = useState('');

    const [translate,setTransate] = useState()   

    
    
    let [period,setPeriod] = useState('Month');
    let [numUsers,setNumUsers] = useState(0);
    const [total,setTotal] = useState('');

    const [msg,setMsg] = useState('');

    const [file, setSelectedFile] = useState(null);
    
    const closePurchase=() => {
        document.getElementById('exampleModal').style.display = 'none';
        document.getElementById('exampleModal').style.opacity = '0';

    }
    const showMenu=()=>{
      document.getElementById("mobileMenu").style.right ="0%";
  }
  const closeMenu=()=>{
      document.getElementById("mobileMenu").style.right ="-100%";
  }
  const showDropDown=()=>{
      document.getElementById("myDropdown").classList.toggle("show");
  }
  const showBooks =()=>{
    navigate('/books')
}
    const Copyrights= ()=>{
      navigate('/Privacyrtl');
    }
    const Contacts= ()=>{
      navigate('/Contactsrtl');
    }
    const Help= ()=>{
      navigate('/Helprtl');
    }

   const purchasePopUp=() => {
      debugger;
      let price = total
      let months = 1
      if(period=="Year")
        {
            months=12;
        }
       document.getElementById('exampleModal').style.display = 'block';
       document.getElementById('exampleModal').style.opacity = '1';

       document.getElementById('tranzila').setAttribute('src', 'https://direct.tranzila.com/vayikra22/iframenew.php?sum=' + price + '&currency=2&email=' + localStorage.email +'&fail_url_address=https://direct.tranzila.com/vayikra22/iframenew.php&success_url_address=http://104.238.214.197:8087/success');
      
       localStorage.monthreq = months;
   }

   const Logout= ()=>{
    localStorage.removeItem('loginDate')
    navigate('/');
  }
   
    const Copy=() =>{
        navigator.clipboard.writeText('https://readupp.com/register?param='+guid
        );
    }
        const Back=() =>{
        window.history.go(-1)
    }

    const Save=() =>{
        
      
      if (file != null) {
          getBase64(file); // prints the base64 string
      }
      else{
                      const Register ={'Email':email,'FirstName':firstName,'LastName':lastName,'Password':password,'Phone':tel,'Phone':tel,'Gender':gender,'Country':country, 'Address':address,
                      'City':city,'userId':localStorage.userId}
              fetch('https://api.readupp.com/Login/UpdateRegisterUser',{
              //    fetch('https://localhost:44318/Login/UpdateRegisterUser',{
                  method:'POST',
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(Register)
              })
              .then(response => response.json())
              .then(data =>
              {
                  debugger;
                  if(data.ok)
                  {
                  localStorage.loginDate = Date.now()
                  setMsg('Data saved')
              }

              })
              .catch(() => {
              setMsg('Error')
              });
      } 


        
    }
    
    const getBase64=(file) =>{

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
       let   filebase64 = reader.result;

      const Register ={'Email':email,'FirstName':firstName,'LastName':lastName,'Password':password,'Phone':tel,'Phone':tel,'Gender':gender,'Country':country, 'Address':address,
                  'City':city,'userId':localStorage.userId,'logo': filebase64}
            fetch('https://api.readupp.com/Login/UpdateRegisterUser',{
            //    fetch('https://localhost:44318/Login/UpdateRegisterUser',{
              method:'POST',
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(Register)
            })
            .then(response => response.json())
            .then(data =>
            {
              debugger;
              if(data.ok)
              {
              localStorage.loginDate = Date.now()
              setMsg('Data saved')
            }

            })
            .catch(() => {
            setMsg('Error')
            });
          }
  }
    
    const changeNumUsers =(value)=>{
        setNumUsers(value)
        if(period=="Month")
        {
            if(parseInt(value)<100)
            setTotal(parseInt(value)*8)
            else if(parseInt(value)<500)
            setTotal(parseInt(value)*7.2)
            else if(parseInt(value)<1000)
            setTotal(parseInt(value)*5)
        }
        else
        {
            if(parseInt(value)<100)
            setTotal(parseInt(value)*8*12)
            else if(parseInt(value)<500)
            setTotal(parseInt(value)*7.2*12)
            else if(parseInt(value)<1000)
            setTotal(parseInt(value)*5*12)
        }
        
    
    }
    const changePeriod =(value)=>{
        setPeriod(value)
        if(value=="Month")
        {
            if(parseInt(numUsers)<100)
            setTotal(parseInt(numUsers)*8)
            else if(parseInt(numUsers)<500)
            setTotal(parseInt(numUsers)*7.2)
            else if(parseInt(numUsers)<1000)
            setTotal(parseInt(numUsers)*5)
        }
        else
        {
            if(parseInt(numUsers)<100)
            setTotal(parseInt(numUsers)*8*12)
            else if(parseInt(numUsers)<500)
            setTotal(parseInt(numUsers)*7.2*12)
            else if(parseInt(numUsers)<1000)
            setTotal(parseInt(numUsers)*5*12)
        }
    }


    useEffect(() => {
      
   //   fetch('https://localhost:44318/api/UserSettings/GetReadupEn')
       fetch('https://api.readupp.com/api/UserSettings/GetReadupEn')
        .then(async response => {
            const data = await response.json();
            debugger;
            setTransate(data);
            
        })
        .catch(error => {
            
        });
     


        //fetch('https://localhost:44318/Login/GetOrg?userid='+localStorage.userId+'&orgid=-1')
        fetch('https://api.readupp.com/Login/GetOrg?userid='+localStorage.userId+'&orgid=-1')
        .then(async response => {
          debugger;
            const data = await response.json();
            setFirstName(data.firstName)
            setImageLogo("https://vayikra-bible.com/"+data.logo)
            setLastName(data.lastName)
            setAddress(data.address)
            setEmail(data.email)
            setTel(data.phone)
            setCountry(data.country)
            setGender(data.gender)
            setCity(data.city)
            setPassword(data.password)
            setPassword2(data.password)
            setGuid(data.guid)
            setSubscribeLastDateString(data.subscribeLastDateString)
            setChaptersCounter(data.chaptersCounter)
            setReadTimer(data.readTimer)
            setSubscriptionCount(data.usersCounter)
            localStorage.loginDate = Date.now()
        })
        .catch(error => {

            console.error('There was an error!', error);
        });
    
    
        
        
    },[])



    return( <>

    
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog subs_modal">
			<div class="modal-content" style={{'margin-top':'20%'}}>
				<div class="container-fluid rtl" >

					<div class="w-100">

						<iframe id="tranzila"  src="https://direct.tranzila.com/vayikra22/iframenew.php?sum=1&fail_url_address=http://google.com&notify_url_address=http://google.com">
						</iframe>

						<button class="px-4 py-2 text-white bg_color1 rounded-3 border-0 mt-5" id="closeiframe" onClick={() => closePurchase()}>
							Close
						</button>
					</div>

				</div>
			</div>
		</div>
	</div>



<div class="header_container">
      <div
        class="container-fluid h-100 d-flex justify-content-between align-items-center px-4"
      >
        <button class="profile bg-transparent border-0">
          <img src={avatar} alt="" />
        </button>
        <div style={{'color':'white','margin-left':'10%','cursor':'Pointer'}} onClick={() => Logout()}>{translate!=null?translate[12].value:'Logout'}</div>
        <div style={{'color':'white','margin-left':'3%','cursor':'Pointer'}} onClick={() => Copyrights()}>Copyrights</div>
        <div style={{'color':'white','margin-left':'3%','cursor':'Pointer'}} onClick={() => Contacts()}>ContactUs</div>
        <div style={{'color':'white','margin-left':'3%','cursor':'Pointer'}} onClick={() => Help()}>Help</div>
        <div class="page_container">
          <div
            class="inner_header_container w-100 d-flex justify-content-between align-items-center"
          >

            <details class="custom-select light d-none d-lg-block">
              <summary class="radios rtl">
                <input
                  type="radio"
                  name="item"
                  id="default"
                  title="English"
                  checked
                />
                <input type="radio" name="item" id="עברית" title="עברית" />
                <input type="radio" name="item" id="English" title="English" />
              </summary>
              <ul class="list">
                <li>
                  <label
                    class="d-flex align-items-center justify-content-between w-100 rtl"
                    for="עברית"
                  >
                    <a
                      class="text-decoration-none text-white d-flex align-items-center justify-content-between w-100"
                      href="institute"
                    >
                      עברית
                    </a>
                  </label>
                </li>
                <li>
                  <label
                    class="d-flex align-items-center justify-content-between w-100"
                    for="English"
                  >
                    <a
                      class="text-decoration-none text-white d-flex align-items-center justify-content-between w-100"
                      href="institutertl"
                    >
                      English
                    </a>
                  </label>
                </li>
              </ul>
            </details>


            <div class="logo" >
              <img src={logolight} alt="" />
            </div>

            <p class="mb-0 text-white f14 d-none d-lg-block">
              <a href="/books" class="text-decoration-none color10"> {translate!=null?translate[13].value:'BOOK LIST'} </a>
             
            </p>
          </div>
        </div>

        <a href='../ACCESSIBILITY.pdf' class="access bg-transparent border-0 d-none d-lg-block">
          
          <img src={accessibility} alt="" />
        </a>

        <div style={{'visibility':'hidden'}}
          onclick="sidebar('hamburger')"
          id="hamburger"
          class="access bg-transparent border-0 d-block d-lg-none"
        >
          <img src={hamburger} alt="" />
        </div>
      </div>
    </div>



    <div  class="sidebar_container px-2">
      <div
        class="container-fluid d-flex align-items-center h-100 justify-content-between"
      >

        <details class="custom-select light">
          <summary class="radios rtl">
            <input
              type="radio"
              name="item-2"
              id="default"
              title="English"
              checked
            />
            <input type="radio" name="item-2" id="עברית-2" title="עברית" />
            <input type="radio" name="item-2" id="English-2" title="English" />
          </summary>
          <ul class="list">
            <li>
              <label
                class="d-flex align-items-center justify-content-between w-100 rtl"
                for="עברית-2"
              >
                <a
                  class="text-decoration-none text-white d-flex align-items-center justify-content-between w-100"
                  href="institute.html"
                >
                  עברית
                </a>
              </label>
            </li>
            <li>
              <label
                class="d-flex align-items-center justify-content-between w-100"
                for="English-2"
              >
                <a
                  class="text-decoration-none text-white d-flex align-items-center justify-content-between w-100"
                  href="institute.en.html"
                >
                  English
                </a>
              </label>
            </li>
          </ul>
        </details>


        <p class="mb-0 text-white f14">
          <a href="" class="text-decoration-none color10"> {translate!=null?translate[13].value:'BOOK LIST'} </a>
      
        </p>

        <button class="access bg-transparent border-0">
        <img style={{'width':'16px'}} src={question} alt="" onClick={() => Help()}/>
          <img src={accessibility} alt="" />
        </button>
      </div>
    </div>



    <div onclick="sidebar('')" class="page_container">
      <div class="search_container">
        <img
          class="d-none d-lg-block back pointer" style={{'width': '70px','margin-left': '1%'}}
          src={back} onClick={() => Back()}
          alt=""
        />

        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column gap-2">
            <h1 class="color1 f28 mb-0 fw700">{translate!=null?translate[1].value:'Welcome'}  {firstName},</h1>
            <p class="f20 mb-0 fw400">
            {translate!=null?translate[14].value:'To start using READ-UP, please select a package:'} 
            </p>
          </div>
          <div style={{'max-width': '20%'}}>
            <img style={{'max-width': '120px','float': 'right'}} src={imageLogo==''?logo2:imageLogo} alt="" />
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-8">
            <ul class="user_card row gx-3 gy-3 list-unstyled">
              <li class="col-6 col-md-3">
                <div>
                  <p class="f16">0-100 Users</p>
                  <h3 class="f22 fw500">8 $ Per user</h3>
                </div>
              </li>
              <li class="col-6 col-md-3">
                <div>
                  <p class="f16">100-500 Users</p>
                  <h3 class="f22 fw500">7.2 $ Per user</h3>
                </div>
              </li>
              <li class="col-6 col-md-3">
                <div>
                  <p class="f16">500-1000 Users</p>
                  <h3 class="f22 fw500">5 $ Per user</h3>
                </div>
              </li>
              <li class="col-6 col-md-3">
                <div>
                  <p class="f16">1000+ Users</p>
                  <h3 class="f22 fw500">Contact us</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-8">
            <ul class="user_card mt-2 row gx-3 list-unstyled">
              <li class="col-6 col-md-3">
                <label class="color11 f14" for="Number of users">{translate!=null?translate[15].value:'Number of users'}  </label>
                
                <div class="col-12 col-sm-6" id="numpricediv">      
                          <input id="numprice" class="mt-3 w-100" type="text" placeholder="First Name" value={numUsers} onChange={(e)=>changeNumUsers(e.target.value)}/>

                </div>
              </li>
              <li class="col-6 col-md-3">
                <label class="color11 f14" for="Period">{translate!=null?translate[16].value:'Period'}  </label>
                <select class="f14 color11 ps-2 w-100" value={period} name="" id="" onChange={(e)=>changePeriod(e.target.value)}>
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>
                </select>
              </li>

              <div class="col-12 mt-4">
                <label class="color11 f14" for="Period">{translate!=null?translate[17].value:'Summary'} </label>
                <div class="rounded-3 bg_color3 p-3">
                  <div class="row align-items-center">
                    <div class="col-4 col-md-3 d-flex align-items-center">
                      <img src={userAvtr} alt="" />
                      <h2 class="mb-0 fw600 color1 ms-2 f22">{numUsers} Users</h2>
                    </div>
                    <div class="col-4 col-md-3 d-flex align-items-center">
                      <img src={cal2} alt="" />
                      <p class="f18 ms-2 colo11 f16 mb-0">For - {period}</p>
                    </div>
                    <div class="d-none d-md-block col-3"></div>
                    <div class="col-4 col-md-3 last">
                      <h2 class="mb-0 mt-1 f20 fw700 color1">
                      {translate!=null?translate[18].value:'Total:'}  {total}
                      </h2>
                    </div>
                   
                  </div>
                  
                </div>
                <div class="save_btn text-end">
                    <button class="bg_color1 px-5 py-2 rounded-pill border-0 text-white" onClick={() => purchasePopUp()}>
                    {translate!=null?translate[19].value:'Purchase'}
                    </button>
                    </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>



    <div onclick="sidebar('')" class="page_container pb-4 pb-md-0">
      <div class="search_container subscription_container py-4">
        <div class="text-end logo2" style={{'max-width': '20%'}}>
          <img src={imageLogo==''?logo2:imageLogo} alt="" style={{'max-width': '120px','float': 'right'}}/>
        </div>

        <div class="cal_details mt-4">
          <div
            class="register_link d-flex flex-column flex-lg-row justify-content-between align-items-lg-center"
          >
            <div>
              <p class="mb-0 color1 f14"> {translate!=null?translate[20].value:'Registration link for users:'} </p>
              <p class="mb-0 color10 d-flex align-items-center">
              https://readupp.com/register?param={guid}
                <img class="pointer ms-2" src={copy} alt="" onClick={() => Copy()}/>
              </p>
            </div>
          
          </div>

          <div class="row">
            <div class="col-12 col-lg-1">
              <p class="color1 fw700 mb-0">{translate!=null?translate[21].value:'Sum'}</p>
            </div>
            <div class="col-12 col-lg-11">
              <div
                class="inner_cal_details d-flex flex-column flex-md-row justify-content-between px-4 py-3 rounded-1 w-100"
              >
                <div class="d-flex align-items-center pb-2 pb-md-0" style={{'width':'280px'}}>
                  <div>
                    <p class="color5 mb-0">{translate!=null?translate[22].value:'Subscription ends:'}</p>
                    <h5 class="mb-0 color1 fw500 f28">{subscribeLastDateString}</h5>
                  </div>
                  <div class="ms-5">
                    <img src={cal} alt="" />
                  </div>
                </div>
                <div class="line_ver"></div>
                <div
                  class="d-flex align-items-center pt-2 pt-md-0 pb-2 pb-md-0">
                  <div>
                    <p class="mb-0 color5">{translate!=null?translate[23].value:'Chapters read:'}</p>
                    <h5 class="mb-0 color1 fw500 f28">{chaptersCounter} Chapters</h5>
                  </div>
                  <div class="ms-5">
                    <img src={book} alt="" />
                  </div>
                </div>
               
                
              </div>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-12 col-lg-1">
              <p class="color1 fw700 mb-0"></p>
            </div>
            <div class="col-12 col-lg-11">
              <div
                class="inner_cal_details d-flex flex-column flex-md-row justify-content-between px-4 py-3 rounded-1 w-100"
              >
                
                <div style={{'width':'300px'}}
                  class="d-flex align-items-center pt-2 pt-md-0 pb-2 pb-md-0">
                  <div>
                    <p class="mb-0 color5">{translate!=null?translate[24].value:'Subscription count:'}</p>
                    <h5 class="mb-0 color1 fw500 f28">{subscriptionCount} Subscriptions</h5>
                  </div>
                  <div class="ms-5">
                    <img src={cal} alt="" />
                  </div>
                </div>
                <div class="line_ver"></div>
                <div class="d-flex align-items-center pt-2 pt-md-0">
                  <div>
                    <p class="mb-0 color5">{translate!=null?translate[25].value:'Total Reading Time:'}</p>
                    <h5 class="mb-0 color1 fw500 f28">{readTimer} Hours</h5>
                  </div>
                  <div class="ms-5">
                    <img src={timer} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          

          <div class="form_sec row mt-5">
            <div class="col-12 col-sm-6">
              <p class="mb-2 color1 fw700 heebo f22">{translate!=null?translate[26].value:'Institution details'}</p>
              <input class="w-100" type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
              <input class="mt-3 w-100" type="text" placeholder="Last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
              <input class="mt-3 w-100" type="text" placeholder="E-mail" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
              <input class="mt-3 w-100" type="text" placeholder="Tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
              <div class="selectdiv">
                <select class="mt-3 w-100" value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="Gender">Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Porofessor">Porofessor</option>
                </select>
              </div>
              <input class="mt-3 w-100" type="text" placeholder="Country" value={country} onChange={(e)=>setCountry(e.target.value)}/>

              <input class="mt-3 w-100" type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
              <input class="mt-3 w-100" type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>

           

              <div class="d-flex gap-3 align-items-center mt-3">
                
                <label for="files" class="btn"><img  class="pointer" src={upload} alt="" /></label>
                <p class="mb-0 color11" style={{'width':'100%'}}>Logo upload</p>
                <input id="files" accept="image/*"  onChange={(e) => setSelectedFile(e.target.files[0])} type="file" style={{'visibility':'hidden'}}></input>

              </div>
            </div>
            <div class="col-12 col-sm-6 mt-5 mt-sm-0">
              <div class="d-flex flex-column justify-content-between h-100">
                <div>
                  <p class="mb-2 color1 fw700 heebo f22">{translate!=null?translate[27].value:'Password change'}</p>
                  <input class="w-100" type="text" placeholder="New password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <input
                    class="mt-3 w-100"
                    type="text"
                    placeholder="New password (again)" value={password2} onChange={(e)=>setPassword2(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="save_btn text-end">
          <button class="bg_color1 px-5 py-2 rounded-pill border-0 text-white" onClick={() => Save()}>
            Save
          </button>
          <div>{msg}</div>
        </div>
      </div>
    </div>

    <div id="footer">
        <a href="#" onClick={() => Contacts()}>צור קשר </a>
        <a href="#" onClick={() => Copyrights()}>זכויות יוצרים </a>

       
    </div>

</>)
}