import React, { useContext, useState,useEffect }  from "react";


import hamburger from '../assets/icons/hamburger.svg'
import logolight from '../assets/images/logo-light.png'
import avatar from '../assets/icons/avatar.svg'
import search from '../assets/icons/search.svg'
import accessibility from '../assets/icons/accessibility-light.svg'
import back from '../assets/icons/back.svg'
import cal from '../assets/icons/cal.svg'
import book from '../assets/icons/book.svg'
import timer from '../assets/icons/timer.svg'
import {useNavigate } from 'react-router-dom'
import needHelp from "../assets/images/needHelp.svg"

import menuCross from "../assets/images/menuCross.svg"
import menuICon from "../assets/images/menuICon.png"
import icons8down48 from "../assets/images/icons8-down-48.png"

export default function Accountrtl(){

  const navigate = useNavigate();

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

    const [translate,setTransate] = useState()   

    const [subscribeLastDateString,setSubscribeLastDateString] = useState('');
    const [chaptersCounter,setChaptersCounter] = useState('');
    const [readTimer,setReadTimer] = useState('');

    const [msg,setMsg] = useState('');
    

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
  


    const purchasePopUp=(months, price) => {
       debugger;
        document.getElementById('exampleModal').style.display = 'block';
        document.getElementById('exampleModal').style.opacity = '1';

        document.getElementById('tranzila').setAttribute('src', 'https://direct.tranzila.com/vayikra22/iframenew.php?sum=' + price + '&currency=2&email=' + localStorage.email +'&fail_url_address=https://direct.tranzila.com/vayikra22/iframenew.php&success_url_address=http://104.238.214.197:8087/success');
       
        localStorage.monthreq = months;
    }

    const Back=() =>{
        window.history.go(-1)
    }

    const Logout= ()=>{
      localStorage.removeItem('loginDate')
      navigate('/');
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

    const Save=() =>{
        debugger;
       


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
    const focusBirthdate=(e)=>{
      document.getElementById('birthdate').type='date'
    }

    useEffect(() => {

    //  fetch('https://localhost:44318/api/UserSettings/GetReadupEn')
        fetch('https://api.readupp.com/api/UserSettings/GetReadupEn')
        .then(async response => {
            const data = await response.json();
            debugger;
            setTransate(data);
            
        })
        .catch(error => {
            
        });

      fetch('https://api.readupp.com/Login/GetUser?userid='+localStorage.userId)
      //  fetch('https://localhost:44318/Login/GetUser?userid='+localStorage.userId)
        .then(async response => {
            const data = await response.json();
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setAddress(data.address)
            setEmail(data.email)
            setTel(data.phone)
            setCountry(data.country)
            setGender(data.gender)
            setCity(data.city)
            setPassword(data.password)
            setPassword2(data.password)
            debugger;
            if(data.birthDate!=undefined)
              document.getElementById('birthdate').valueAsDate=  new Date(data.birthDate.split('T')[0])
            console.log('1');
            document.getElementById('langsel').value=data.nativeLang
            setSubscribeLastDateString(data.subscribeLastDateString)
            setChaptersCounter(data.chaptersCounter)
            setReadTimer(data.readTimer)
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
                      href="accountrtl"
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
                      href="account"
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

        <div style={{'visibility':'hidden'}} onclick="sidebar('hamburger')" id="hamburger" class="access bg-transparent border-0 d-block d-lg-none">
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
                  href="account.html"
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
                  href="account.en.html"
                >
                  English
                </a>
              </label>
            </li>
          </ul>
        </details>

        <p class="mb-0 text-white f14">
          <a href="" class="text-decoration-none color10"> {translate!=null?translate[13].value:'BOOK LIST'}  </a>

         
        </p>

        <button class="access bg-transparent border-0">
          <img src={accessibility} alt="" />
        </button>
      </div>
    </div>

    <div onclick="sidebar('')" class="page_container">
      <div class="container-fluid">
        <div class="search_container row gy-5 gy-lg-0 rtl">
          <img
            class="d-none d-lg-block back pointer" style={{'width': '70px','margin-left': '1%'}}
            src={back} onClick={() => Back()}
            alt=""
          />

          <div class="col-12 col-lg-6 mt-0">
            <div class="w-100 d-flex flex-column">
              <div class="d-flex flex-column gap-2">
                <h1 class="color1 f28 mb-0 fw700">{translate!=null?translate[1].value:'Welcome'}  {firstName},</h1>
                <p class="f20 mb-0 fw400">
                {translate!=null?translate[28].value:'To start using READ-UP, please select a package:'} 
                </p>
              </div>
            </div>
          </div>
          <div class="col-9 col-lg-6 mx-auto">
            <div class="row gy-4">
              <div class="col-sm-6">
                <div class="pay_card bs">
                  <p class="bs_val rtl">{translate!=null?translate[32].value:'Best value'} </p>

                  <div
                    class="d-flex flex-column justify-content-between align-items-center"
                  >
                    <div
                      class="d-flex flex-column justify-content-between align-items-center"
                    >
                      <h4 class="f22 color1 fw700">{translate!=null?translate[31].value:'Yearly subscription'} </h4>
                      <h1 class="f28 mt-4 mb-0 color10">$33 / year</h1>
                      <p class="fw500 color1">Prepaid</p>
                    </div>

                    <div
                      class="d-flex flex-column justify-content-between align-items-center mt-4"
                    >
                      <p class="f18 color5 fw500">{translate!=null?translate[33].value:'Unlimited reading'}</p>
                      <button onClick={() => purchasePopUp(12,33)}
                        class="w-100 bg_color1 py-2 rounded-pill text-white"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="pay_card">
                  <div
                    class="d-flex flex-column justify-content-between align-items-center"
                  >
                    <div
                      class="d-flex flex-column justify-content-between align-items-center"
                    >
                      <h4 class="f22 color1 fw700">{translate!=null?translate[30].value:'Monthly subscription'}</h4>
                      <h1 class="f28 mt-4 mb-0 color10">$3 / month</h1>
                      <p class="fw500 color1">Prepaid</p>
                    </div>

                    <div
                      class="d-flex flex-column justify-content-between align-items-center mt-4"
                    >
                      <p class="f18 color5 fw500">{translate!=null?translate[33].value:'Unlimited reading'}</p>
                      <button onClick={() => purchasePopUp(1,3)}
                        class="w-100 bg_color1 py-2 rounded-pill text-white"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div onclick="sidebar('')" class="page_container pb-4 pb-md-0 rtl">
      <div class="search_container subscription_container py-4">
        <h1 class="color1 fw700 f30">{translate!=null?translate[34].value:'Subscription details'}</h1>

        <div class="cal_details mt-4">
          <div
            class="inner_cal_details d-flex flex-column flex-md-row justify-content-between px-4 py-3 rounded-1"
          >
            <div class="d-flex align-items-center pb-2 pb-md-0">
              <div>
                <p class="color5 mb-0">Subscription ends:</p>
                <h5 class="mb-0 color1 fw500 f28">{subscribeLastDateString}</h5>
              </div>
              <div class="ms-5">
                <img src={cal} alt="" />
              </div>
            </div>
            <div class="line_ver"></div>
            <div class="d-flex align-items-center pt-2 pt-md-0 pb-2 pb-md-0">
              <div>
                <p class="mb-0 color5">Chapters read</p>
                <h5 class="mb-0 color1 fw500 f28">{chaptersCounter} Chapters</h5>
              </div>
              <div class="ms-5">
                <img src={book} alt="" />
              </div>
            </div>
            <div class="line_ver"></div>
            <div class="d-flex align-items-center pt-2 pt-md-0">
              <div>
                <p class="mb-0 color5">Total Reading Time:</p>
                <h5 class="mb-0 color1 fw500 f28">{readTimer} Hours</h5>
              </div>
              <div class="ms-5">
                <img src={timer} alt="" />
              </div>
            </div>
          </div>

          <div class="form_sec row mt-5">
            <div class="col-12 col-sm-6">
              <p class="mb-2 color1 fw700 heebo f22">
                {translate!=null?translate[35].value:'Editing your account information:'}
              </p>
              <input class="w-100" type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
              <input class="mt-3 w-100" type="text" placeholder="Last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
              <input class="mt-3 w-100" type="text" placeholder="E-mail" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
              <input class="mt-3 w-100" type="text" placeholder="Tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
              <div class="selectdiv rtl">
                <select class="mt-3 w-100" value={gender} onChange={(e)=>setGender(e.target.value)}>
                  <option value="Gender">Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Porofessor">Porofessor</option>
                </select>
              </div>
               <input class="mt-3 w-100" type="text" placeholder="Country" onChange={(e)=>setCountry(e.target.value)}/>

              <input class="mt-3 w-100" type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
              <input class="mt-3 w-100" type="text" placeholder="City" value={city}  onChange={(e)=>setCity(e.target.value)}/>
              
              <div class="selectdiv rtl">
                    <label class="w-100" >
                      <select 
                       
                        class="w-100"
                        id="langsel"
                      >
                        <option value="">Native Language</option>
                        <option value="3">Akan</option>
<option value="4">Amharic</option>
<option value="5">Arabic</option>
<option value="6">Belarusian</option>
<option value="7">Bengali</option>
<option value="8">Burmese</option>
<option value="9">Chewa</option>
<option value="10">Czech</option>
<option value="11">Deccan</option>
<option value="12">Dhundhari</option>
<option value="13">Dutch</option>
<option value="14">Eastern Min</option>
<option value="2">English</option>
<option value="15">French</option>
<option value="16">Fula</option>
<option value="17">German</option>
<option value="18">Greek</option>
<option value="19">Haitian Creole</option>
<option value="20">Hakka</option>
<option value="21">Haryanvi</option>
<option value="22">Hindi</option>
<option value="1">Hebrew</option>
<option value="23">Hungarian</option>
<option value="24">Ilocano</option>
<option value="25">Italian</option>
<option value="26">Japanese</option>
<option value="27">Javanese</option>
<option value="28">Jin</option>
<option value="29">Kannada</option>
<option value="30">Kazakh</option>
<option value="31">Kirundi</option>
<option value="32">Konkani</option>
<option value="33">Korean</option>
<option value="34">Kurdish</option>
<option value="35">Madurese</option>
<option value="36">Magahi</option>
<option value="37">Maithili</option>
<option value="38">Malayalam</option>
<option value="39">Mandarin</option>
<option value="40">Marathi</option>
<option value="41">Marwari</option>
<option value="42">Mossi</option>
<option value="43">Nepali</option>
<option value="44">Northern Min</option>
<option value="45">Odia (Oriya)</option>
<option value="46">Oromo</option>
<option value="47">Pashto</option>
<option value="48">Persian</option>
<option value="49">Polish</option>
<option value="50">Portuguese</option>
<option value="51">Punjabi</option>
<option value="52">Quechua</option>
<option value="53">Romanian</option>
<option value="54">Russian</option>
<option value="55">Serbo-Croatian</option>
<option value="56">Shona</option>
<option value="57">Sindhi</option>
<option value="58">Sinhalese</option>
<option value="59">Somali</option>
<option value="60">Southern Min</option>
<option value="61">Spanish</option>
<option value="62">Sundanese</option>
<option value="63">Swedish</option>
<option value="64">Sylheti</option>
<option value="65">Tagalog</option>
<option value="66">Tamil</option>
<option value="67">Telugu</option>
<option value="68">Thai</option>
<option value="69">Turkish</option>
<option value="70">Turkmen</option>
<option value="71">Ukrainian</option>
<option value="72">Urdu</option>
<option value="73">Uyghur</option>
<option value="74">Uzbek</option>
<option value="75">Vietnamese</option>
<option value="76">Xhosa</option>
<option value="77">Yoruba</option>
<option value="78">Zhuang</option>
<option value="79">Zulu</option>

                        
                      </select>
                    </label>
                  </div>
                  <div class="date_cal position-relative">
                      <input   
                        class="mt-3 w-100"
                        type="text"
                            onFocus={(e)=>focusBirthdate(e.target.value)}
                        placeholder="Birth date"
                        id="birthdate"
                      />
                    
                    </div>
            </div>
            <div class="col-12 col-sm-6 mt-5 mt-sm-0">
              <div class="d-flex flex-column justify-content-between h-100">
                <div>
                  <p class="mb-2 color1 fw700 heebo f22">{translate!=null?translate[36].value:'Change password:'}</p>
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
          <button style={{'float':'left'}} class="bg_color1 px-5 py-2 rounded-pill border-0 text-white" onClick={() => Save()}>
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