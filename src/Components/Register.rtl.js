import React, { useState ,useEffect}  from "react";
import logo from '../assets/images/logo.png'
import special_message from '../assets/images/special_message.png'
import {useNavigate } from 'react-router-dom'
import cal from '../assets/icons/cal.svg'


export default function Registerrtl(){

    const navigate = useNavigate();
    const [err,setErr] = useState('');
    const [passerr,setPassErr] = useState('');
    const [type,setType] = useState('Organisation');

    const [terms,setTerms] = useState('');
    const [termsValidation,setTermsValidation] = useState('');

    const [org_orgValidation,setOrg_OrgValidation] = useState('');
    const [org_organization,setOrg_organization] = useState('');

    const [usr_birthdateValidation,setusr_birthdateValidation] = useState('');
    const [usr_langValidation,setusr_langValidation] = useState('');

    const [org_jobValidation,setOrg_jobValidation] = useState('');
    const [org_job,setOrg_job] = useState('');

    const [org_firstNameValidation,setOrg_firstNameValidation] = useState('');
    const [org_firstName,setOrg_firstName] = useState('');

    const [org_lastNameValidation,setOrg_lastNameValidation] = useState('');
    const [org_lastName,setOrg_lastName] = useState('');

    const [org_emailValidation,setOrg_emailValidation] = useState('');
    const [org_email,setOrg_email] = useState('');

    const [org_passwordValidation,setOrg_passwordValidation] = useState('');
    const [org_password,setOrg_password] = useState('');

    const [org_password2Validation,setOrg_password2Validation] = useState('');
    const [org_password2,setOrg_password2] = useState('');

    const [logo2,setLogo2] = useState('');

    const [birthdate,setBirthDate] = useState('');
    const [lang,setLang] = useState('');

    const [translate,setTransate] = useState()   
 

    const [usr_firstNameValidation,setUsr_firstNameValidation] = useState('');
    const [usr_firstName,setUsr_firstName] = useState('');

    const [usr_lastNameValidation,setUsr_lastNameValidation] = useState('');
    const [usr_lastName,setUsr_lastName] = useState('');

    const [usr_emailValidation,setUsr_emailValidation] = useState('');
    const [usr_email,setUsr_email] = useState('');

    const [usr_passwordValidation,setUsr_passwordValidation] = useState('');
    const [usr_password,setUsr_password] = useState('');

    const [usr_password2Validation,setUsr_password2Validation] = useState('');
    const [usr_password2,setUsr_password2] = useState('');


    const focusBirthdate=(e)=>{
      document.getElementById('date').type='date'
    }
    
    const SignIn =()=>{
        debugger;
        let validation=true;
        setErr(false)
        setPassErr(false)
        if(terms!=true)
        {
        setTermsValidation("1px solid red")
        validation=false;
        }
        else
        setTermsValidation("")

    if(type=="Organisation")
    {
        if(org_organization.trim()=="")
        {
        setOrg_OrgValidation("1px solid red")
        validation=false;
        }
        else
        setOrg_OrgValidation("")
debugger;
        if(org_job.trim()=="")
        {
          setOrg_jobValidation("1px solid red")
        validation=false;
        }
        else
        setOrg_jobValidation("")

       

        if(org_firstName.trim()=="")
        {
        setOrg_firstNameValidation("1px solid red")
        validation=false;
        }
        else
        setOrg_firstNameValidation("")

        if(org_lastName.trim()=="")
        {
        setOrg_lastNameValidation("1px solid red")
        validation=false;
        }
        else
        setOrg_lastNameValidation("")

        if(org_email.trim()=="")
        {
        setOrg_emailValidation("1px solid red")
        validation=false;
        }
        else
        setOrg_emailValidation("")

        if(org_password.trim()=="")
        {
        setOrg_passwordValidation("1px solid red")
        validation=false;
        }
        else
        setOrg_passwordValidation("")

        if(org_password2.trim()=="")
        {
        setOrg_password2Validation("1px solid red")
        validation=false;
        }
        else
        setOrg_password2Validation("")

        if(org_password!=org_password2)
        {
            validation=false;
            setOrg_passwordValidation("1px solid red")
            setOrg_password2Validation("1px solid red")
        }
        if(org_password.length<8 || !containsNumbers(org_password) || !containsLetters(org_password))
        {
          debugger;
          if(org_password==org_password2 && org_password2.trim()!="")
          {
          setPassErr(true)
            validation=false;
            setOrg_passwordValidation("1px solid red")
          }
        }
    }
    else
    {
      debugger;
      if(birthdate.trim()=="")
      {
        setusr_birthdateValidation("1px solid red")
      validation=false;
      }
      else
      setusr_birthdateValidation("")
      if(lang.trim()=="")
        {
          setusr_langValidation("1px solid red")
        validation=false;
        }
        else
        setusr_langValidation("")

        if(usr_firstName.trim()=="")
        {
        setUsr_firstNameValidation("1px solid red")
        validation=false;
        }
        else
        setUsr_firstNameValidation("")

        if(usr_lastName.trim()=="")
        {
        setUsr_lastNameValidation("1px solid red")
        validation=false;
        }
        else
        setUsr_lastNameValidation("")

        if(usr_email.trim()=="")
        {
        setUsr_emailValidation("1px solid red")
        validation=false;
        }
        else
        setUsr_emailValidation("")

        if(usr_password.trim()=="")
        {
        setUsr_passwordValidation("1px solid red")
        validation=false;
        }
        else
        setUsr_passwordValidation("")

        if(usr_password2.trim()=="")
        {
        setUsr_password2Validation("1px solid red")
        validation=false;
        }
        else
        setUsr_password2Validation("")

        if(usr_password!=usr_password2)
        {
            validation=false;
            setUsr_passwordValidation("1px solid red")
            setUsr_password2Validation("1px solid red")
        }

        
    }

    if(validation==true)
    {
        if(type=="Organisation")
        {
            const Register ={'Email':org_email,'OrgName':org_organization,'FirstName':org_firstName,'LastName':org_lastName,'Password':org_password,'Job':org_job}
               fetch('https://api.readupp.com/Login/RegisterOrg',{
            //    fetch('https://localhost:44318/Login/RegisterOrg',{
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(Register)
                })
                .then(response => response.json())
                .then(data =>
                {
                    debugger;
                    setErr(!data.ok);
                    if(data.ok)
                    {
                    localStorage.loginDate = Date.now()
                    localStorage.userId = data.userId;
                    localStorage.role = data.role;
                    localStorage.email = data.email;
                        navigate('/booksrtl')
                }
                
    })
    .catch(() => {
        debugger;
        setErr(true);
      });

        }
        else
        {
            const Register ={'Email':usr_email,'FirstName':usr_firstName,'LastName':usr_lastName,'Password':usr_password,'orgId':0,'guid':getSearchParams('prama'),
          'NativeLang':lang,'BirthDate':birthdate}
               fetch('https://api.readupp.com/Login/RegisterUser',{
        //    fetch('https://localhost:44318/Login/RegisterUser',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(Register)
            })
            .then(response => response.json())
            .then(data =>
            {
                debugger;
                setErr(!data.ok);
                if(data.ok)
                {
                localStorage.loginDate = Date.now()
                localStorage.userId = data.userId;
                localStorage.role = data.role;
                localStorage.email = data.email;
                localStorage.exp="none";
                    navigate('/booksrtl')
                }
            })
            .catch(() => {
                setErr(true);
              });
        }
    }

    }


    const changeRegType =(type)=>{
        setType(type)
        if (type === "Private user") {
            document.getElementById("privat-user").style.display = "block";
            document.getElementById("organisation").style.display = "none";
            userSubscription("YES")
          } else {
            document.getElementById("privat-user").style.display = "none";
            document.getElementById("organisation").style.display = "block";
      
          }

    }


    const containsNumbers=(str)=> {
      return /\d/.test(str);
    }

    const containsLetters=(str)=> {
      return /[a-zA-Z]/.test(str);
    }

    const getSearchParams=(k)=> {
      var p = {};
      window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v })
      return k ? p[k] : p;
  }

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


    debugger;
    if(window.location.href.includes('param'))
    {
      changeRegType('Private user');
      document.getElementById('selectOrgUsr').selectedIndex = 1;
      document.getElementById('selectOrgUsrUp').style.visibility = 'hidden';

    }

    fetch('https://api.readupp.com/Login/GetIcon?guid='+getSearchParams('param'))
    //    fetch('https://localhost:44318/api/Chapters/GetBookChapters?id='+id+'&user='+localStorage.userId)
        .then(async response => {
            const data = await response.json();
            setLogo2(data.line);
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

    },[])
    const userSubscription = (type) => {
    
        if (type === "YES") {
          document.getElementById("subscription_message").style.display = "none";
          document.getElementById("not_organisation").style.display = "block";
          if(document.getElementsByClassName("focus")[0]!=undefined)
          document.getElementsByClassName("focus")[0].classList.remove('focus')
        } else {
          document.getElementById("subscription_message").style.display = "block";
          document.getElementById("not_organisation").style.display = "none";
          if(document.getElementsByClassName("focus")[0]!=undefined)
          document.getElementsByClassName("focus")[0].classList.remove('focus')
         }
      };


    return( <> 
    
    
    <div class="register_container">
      <div class="inner_register_container" style={{'direction':'rtl'}}>

        <details class="custom-select">
          <summary class="radios">
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
                class="d-flex align-items-center justify-content-between w-100"
                for="עברית"
              >
                <a
                  class="text-decoration-none text-white d-flex align-items-center justify-content-between w-100 rtl"
                  href="registerrtl"
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
                  href="register"
                >
                  English
                </a>
              </label>
            </li>
          </ul>
        </details>


        <div
          class="d-flex flex-column justify-content-center align-items-center w-100 mt-4 mt-md-2"
        >
          <div>
            <img style={{'max-width':'120px'}} src={logo2!=''? logo2:logo} alt="" />
          </div>
          <h3 class="color1 mb-0 mt-4">{translate!=null?translate[37].value:'Sign in'}</h3>
        </div>

        <div class="form_container container-fluid mt-4">
          <div class="row">
            <div class="col-xl-8 mx-auto">
              <div class="row gy-3">
                <div class="col-12" id="selectOrgUsrUp">
                  <div class="selectdiv">
                    <label class="w-100" >
                      <select
                        onChange={(e) => changeRegType(e.target.value)} 
                        class="w-100"
                        id="selectOrgUsr"
                      >
                        <option value="Organisation">Organisation</option>
                        <option value="Private user">Private user</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div  id="privat-user" class="col-12">
                  <div class="row gy-3">
                    

                    <div id="subscription_message" class="col-12 mt-4">
                      <div class="special_message">
                        <div class="container-fluid p-3">
                          <div class="row">
                            <div class="col-7 pe-0">
                              <p class="f14 mb-0 color1 fw500">
                                We’re Sorry.. in order to access the book
                                database, you must establish a subscription at
                                the
                                <span class="text-decoration-underline">
                                  The Central Library for the Blind, Visually
                                  Impaired and Handicapped.
                                </span>
                                After the subscription is approved, please log
                                in again.
                              </p>
                            </div>
                            <div class="col-5 ps-0 pe-1">
                              <img
                                class="w-100"
                                src={special_message}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      
                      id="not_organisation"
                      class="col-12"
                    >
                      <div class="row gy-3">
                       
                       
                        <div class="col-12">
                          <input style={{border:usr_firstNameValidation}}
                            class="w-100"
                            type="text"
                            name=""
                            id=""
                            value={usr_firstName} onChange={(e)=>setUsr_firstName(e.target.value)}
                            placeholder="First name"
                          />
                        </div>
                        <div class="col-12">
                          <input style={{border:usr_lastNameValidation}}
                            class="w-100"
                            type="text"
                            name=""
                            id=""
                            value={usr_lastName} onChange={(e)=>setUsr_lastName(e.target.value)}
                            placeholder="Last name"
                          />
                        </div>
                        <div class="col-12">
                          <input style={{border:usr_emailValidation}}
                            class="w-100"
                            type="text"
                            name=""
                            id=""
                            value={usr_email} onChange={(e)=>setUsr_email(e.target.value)}
                            placeholder="E-mail"
                          />
                        </div>

                        <div class="col-12" >
                  <div class="selectdiv">
                    <label class="w-100" >
                      <select style={{border:usr_langValidation}}
                        onChange={(e) => setLang(e.target.value)} 
                        class="w-100"
                        id=""
                        value={lang}
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
                </div>

                    <div class="col-12">
                    
                    <div class="date_cal position-relative">
                      <input style={{'margin-top':'0px !important',border:usr_birthdateValidation}}  value={birthdate}  onChange={(e)=>setBirthDate(e.target.value)}
                        class="mt-3 w-100"
                        type="text"
                            onFocus={(e)=>focusBirthdate(e.target.value)}
                        placeholder="Birth date"
                        id="date"
                      />
                    
                    </div>

              </div>


                        <div class="col-12">
                          <input style={{border:usr_passwordValidation}}
                            class="w-100"
                            type="text"
                            name=""
                            id=""
                            value={usr_password} onChange={(e)=>setUsr_password(e.target.value)}
                            placeholder="Password"
                          />
                        </div>
                        <div class="col-12">
                          <input style={{border:usr_password2Validation}}
                            class="w-100"
                            type="text"
                            name=""
                            id=""
                            value={usr_password2} onChange={(e)=>setUsr_password2(e.target.value)}
                            placeholder="Password  (again)"
                          />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div id="organisation" class="col-12">
                  <div class="row gy-3">
                    <div class="col-12">
                      <input style={{border:org_orgValidation}}
                        class="w-100"
                        type="text"
                        name=""
                        id=""
                        value={org_organization} onChange={(e)=>setOrg_organization(e.target.value)}
                        placeholder="Organisation name"
                      />
                    </div>
                    <div class="col-12">
                      <input  style={{border:org_jobValidation}}
                        class="w-100"
                        type="text"
                        name=""
                        id=""
                        value={org_job} onChange={(e)=>setOrg_job(e.target.value)}
                        placeholder="Job"
                      />
                    </div>
                    <div class="col-12">
                      <input style={{border:org_firstNameValidation}}
                        class="w-100"
                        type="text"
                        name=""
                        id=""
                        value={org_firstName} onChange={(e)=>setOrg_firstName(e.target.value)}
                        placeholder="First name"
                      />
                    </div>
                    <div class="col-12">
                      <input style={{border:org_lastNameValidation}}
                        class="w-100"
                        type="text"
                        name=""
                        id=""
                        value={org_lastName} onChange={(e)=>setOrg_lastName(e.target.value)}
                        placeholder="Last name"
                      />
                    </div>
                    <div class="col-12">
                      <input style={{border:org_emailValidation}}
                        class="w-100"
                        type="text"
                        name=""
                        id=""
                        value={org_email} onChange={(e)=>setOrg_email(e.target.value)}
                        placeholder="E-mail"
                      />
                    </div>

                    


                    <div class="col-12">
                      <input style={{border:org_passwordValidation}}
                        class="w-100"
                        type="text"
                        name=""
                        id=""
                        value={org_password} onChange={(e)=>setOrg_password(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-12">
                      <input style={{border:org_password2Validation}}
                        class="w-100"
                        type="text"
                        name=""
                        id=""
                        value={org_password2} onChange={(e)=>setOrg_password2(e.target.value)}
                        placeholder="Password  (again)"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-6 d-flex align-items-center gap-1 mt-3" style={{border:termsValidation}}>
                  <input type="checkbox" name=""   value={terms} onChange={(e)=>setTerms(e.target.checked)}/>
                  <p class="mb-0 f12 color11 pt-1">
                    I agree to the
                    <span class="text-decoration-underline">terms of use</span>
                  </p>
                </div>
                <div class="col-6 mt-3">
                  <button   onClick={() => SignIn()}
                    class="w-100 bg_color1 text-white border-0 py-3 rounded-pill"
                  >
                    Sign in
                  </button>
                </div>
                { err ?<div className="col-12">
              <span  className="w-100 red" type="text" name>Email allready exist or other details incorrect</span>
                </div> : null }

                { passerr ?<div className="col-12">
              <span  className="w-100 red" type="text" name>Password must be minimum 8 characters and contain letters and numbers</span>
                </div> : null }
                <div class="col-12 mt-4">
                  <hr />

                  <div class="d-flex gap-1 justify-content-center">
                    <p class="color11 mb-0 f14">Already have an account?</p>
                    <a class="color1 fw800 f14" href="./">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    
    
    
    </>)
}