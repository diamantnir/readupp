import React, { useState ,useEffect}  from "react";
import logo from '../assets/images/logo-light.png'
import search1 from '../assets/images/search-pic.png'
import icon from '../assets/icons/avatar.svg'
import searchIcon from '../assets/icons/search.svg'
import accessibility from '../assets/icons/accessibility-light.svg'
import hamburger from '../assets/icons/hamburger.svg'
import searchdark from '../assets/icons/search-dark.svg'
import {useNavigate } from 'react-router-dom'
import back from '../assets/icons/back.svg'
import needHelp from "../assets/images/needHelp.svg"
import question from '../assets/icons/question.svg'

import menuCross from "../assets/images/menuCross.svg"
import menuICon from "../assets/images/menuICon.png"
import icons8down48 from "../assets/images/icons8-down-48.png"
import '../assets/styles/chapters/chapters.css';

export default function Chaptersrtl(){
    const navigate = useNavigate();

    const [chapters,setChapters] = useState([])  
    const [lastChapter,setLastChapter] = useState({sentenceText:";;"})   
    const [bookname,setBookname] = useState()  
    const [author,setAuthor] = useState()  
    const [filterchapters,setFilterChapters] = useState([])   
    const query = new URLSearchParams(window.location.search);
    const [search,setSearch] = useState('');

    const [translate,setTransate] = useState()   

    const Profile=() =>{
        if(localStorage.role=="Admin" || localStorage.role=="Organization Manager")
        navigate('/institutertl')
        else
        navigate('/accountrtl')
    }
    const Logout= ()=>{
        localStorage.removeItem('loginDate')
        navigate('/loginrtl');
      }
    const Redirect=(restart,chapterId,bookdid) =>{
        if(restart=="restart")
        navigate('/playerrtl?id='+chapterId+'&bookid='+bookdid+'&restart=true')
        else
            navigate('/playerrtl?id='+chapterId+'&bookid='+bookdid)
    }

    const Back=() =>{
        window.history.go(-1)
    }
    const showBooks =()=>{
        navigate('/booksrtl')
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
    const doSearch =(value)=>{
        let tmp=[]
        debugger;
        for(var i=0;i<chapters.length;i++)
        {
            if(chapters[i].chapterName!=null && chapters[i].chapterName.toLowerCase().includes(value.toLowerCase()))
            {
                tmp.push(chapters[i]);
            }
        }
        setFilterChapters(tmp);
    
    }

    const getSearchParams=(k)=> {
        var p = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v })
        return k ? p[k] : p;
    }

    useEffect(() => {

        //fetch('https://localhost:44318/api/UserSettings/GetReadupHe')
          fetch('https://api.readupp.com/api/UserSettings/GetReadupHe')
          .then(async response => {
              const data = await response.json();
              debugger;
              setTransate(data);
              
          })
          .catch(error => {
              
          });
        const id = getSearchParams('id')

        
        
        fetch('https://api.readupp.com/api/Chapters/GetBookChapters?id='+id+'&user='+localStorage.userId)
    //    fetch('https://localhost:44318/api/Chapters/GetBookChapters?id='+id+'&user='+localStorage.userId)
        .then(async response => {
            const data = await response.json();
            setChapters(data);
            setFilterChapters(data);
            localStorage.loginDate = Date.now()
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
        
        fetch('https://api.readupp.com/api/Chapters/GetLastChapter?id='+id+'&user='+localStorage.userId)
       // fetch('https://localhost:44318/api/Chapters/GetLastChapter?id='+id+'&user='+localStorage.userId)
        .then(async response => {
            debugger;
            const data = await response.json();
            setLastChapter(data);
            setBookname(localStorage.bookname)
            setAuthor(localStorage.author)
            localStorage.loginDate = Date.now()
        })
        .catch(error => {
            setLastChapter({sentenceText:';;;',index:'0'});
        });



    },[])

    const showMenu=()=>{
        document.getElementById("mobileMenu").style.right ="0%";
    }
    const closeMenu=()=>{
        document.getElementById("mobileMenu").style.right ="-100%";
    }
    const showDropDown=()=>{
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    const lang= (val)=>{
        const id = getSearchParams('id')
        if(val==1)
        navigate('/chapters?id='+id);
        else
        navigate('/chaptersrtl?id='+id);
      }

      return( <>
        <div class="mobileMenu" id="mobileMenu" style={{'direction':'rtl'}}>
          <div class="inner">
              <img src={menuCross} onClick={() => closeMenu()} class="menuCross" alt="menuCross"/>
              <ul>
              <li> <a onClick={() => showBooks()}>{translate!=null?translate[54].value:'Library'}</a></li>
                  <li><a onClick={() => Contacts()}> {translate!=null?translate[54].value:'Contact us'}</a></li>
                  <li><a onClick={() => Help()}>{translate!=null?translate[55].value:'עזרה'}</a></li>
                  <li><a onClick={() => Copyrights()}> {translate!=null?translate[56].value:'זכויות יוצרים'}</a></li>
                  <li><a href="#"> {translate!=null?translate[1].value:'הצהרת נגישות '}</a></li>
                 

                  <li>
                      <div class="dropDown" style={{'float':'left'}}>
                      <div id="selectLang">
                          <select onChange={(e)=>lang(e.target.value)} name="dropdown" style={{'color':'#44c6cb'}}>
                              <option  value="1" >English</option>
                              <option  value="2" selected>עברית</option>
                      
                          </select>
                          </div>
                      </div>
                  </li>
                  <li><div style={{'clear':'both'}}><a href="#" onClick={() => Logout()}>{translate!=null?translate[12].value:'Logout'}</a></div></li>
                 
              </ul>
          </div>
      </div>
  
  
      <div dir="ltr" class="header" style={{"z-index": "9999!important"}}>
          <div class="left">
          <img src={icon} alt="" onClick={() => Profile()}/>
              <a href="#" onClick={() => Logout()}>{translate!=null?translate[12].value:'Logout'}</a>
              <div class="dropDown">
              <select onChange={(e)=>lang(e.target.value)} name="dropdown" style={{'color':'#44c6cb'}}>
                      <option  value="1" >English</option>
                      <option  value="2" selected>עברית</option>
                    
                  </select>
              </div>
          </div>
          <div class="center">
              <img src={logo} alt="" />
          </div>
  
          <div class="right">
              <div class="menu">
              
                  <div class="library" style={{'margin-top':'15px'}}>
                      <p onClick={() => showBooks()}>{translate!=null?translate[57].value:'ספריה'}</p>
                   
                  </div>
              </div>
              <div class="icons">
              <img style={{'width':'16px'}} src={question} alt="" onClick={() => Help()}/>
              <img src={accessibility} alt="" />
              </div>
          </div>
          <div class="iconMenu">
          <img onClick={() => showMenu()} src={menuICon} class="menuICon" alt="menuICon"/>
          </div>
      </div>
  
  
      <div class="chapterDetail" style={{'direction':'rtl'}}>
          <div class="backBtn">
          <img
                      class="d-none d-lg-block back pointer" style={{'width': '50px','margin-left': '2%'}}
                      src={back} onClick={() => Back()}
                      alt="" />
          </div>
          <div class="inner" style={{'height': '200px'}}>
          <img style={{'float': 'left'}} src={search1} alt="" />
          <span style={{'float': 'right'}}>
              <p style={{"margin-bottom": "10px",'text-align':'right'}}>{author}
              </p>
              <div class="progressTop">
                  <h3>{bookname}</h3>
                  <div class="percentage">
                      <p style={{"width": "90%"}}>{lastChapter.index}% הושלם</p>
                      <progress max="100" value={lastChapter.index}></progress>
                  </div>
              </div>
              <div class="chapter1">
                  <p>{lastChapter.sentenceText!="" && lastChapter.sentenceText.split(';')[2]!="" ? "“"+lastChapter.sentenceText.split(';')[2]+"...”": ""}</p>
                  <button> {translate!=null?translate[10].value:'המשך לקרוא '}</button>
              </div>
          </span>
          </div>
      </div>
      <div class="readingPractice" style={{'direction':'rtl'}}>
          <div class="headerTop" >
              <h3 style={{"margin-bottom": "0px"}}>{translate!=null?translate[10].value:'אימון קריאה'}</h3>
              <form action="#">
              <input  type="text" placeholder={translate!=null?translate[92].value:'Chapter Search'}  onChange={(e) => doSearch(e.target.value)}/>
              <img style={{'right':'80%'}} src={searchdark} alt=""/>
              </form>
          </div>
          {filterchapters.map(chap =>{
                          if(chap.sttLines=="0%" || chap.sttLines=="" || chap.sttLines=="start")
                          {
                              return(<>
                                  <div class="chapterList">
                                         <div class="detailLeft">
                                             <h2>{chap.chapterName}</h2>
                                             <div class="percentage">
                                                 <p>0% הושלם</p>
                                                 <div class="progress">
                                                     <progress class="w-100" max="100" value="0"></progress>
                                                 </div>
                                             </div>
                                             <p class="title">“{chap.libraryId}…”</p>
                                         </div>
                                         <button style={{'display':localStorage.exp}} onClick={() => Redirect('restart',chap.id,chap.bookId)}>{translate!=null?translate[91].value:'Start'}</button>
                                     </div>
                                 </>)
                          }
                          else if(chap.sttLines=="100%" || chap.sttLines=="fin")
                          {
                              return(<>
                               <div class="chapterList">
                                      <div class="detailLeft">
                                          <h2>{chap.chapterName}</h2>
                                          <div class="percentage">
                                              <p>הושלם</p>
                                              <div class="progress">
                                                  <span style={{"width": "100%"}}></span>
                                              </div>
                                          </div>
                                          <p class="title"> “{chap.libraryId}…”</p>
                                      </div>
                                      <button class="f14" style={{'display':localStorage.exp}} onClick={() => Redirect('restart',chap.id,chap.bookId)}> {translate!=null?translate[101].value:'קרא שוב '}</button>
                                  </div>
                              </>)
                          }
                          else 
                          {
                              return(<>
                               <div class="chapterList">
                                      <div class="detailLeft">
                                          <h2>{chap.chapterName}</h2>
                                          <div class="percentage">
                                              <p>{chap.sttLines} הושלם</p>
                                              <div class="progress">
                                              <progress class="w-100" max="100" value={chap.sttLines.replace("%","")}></progress>
                                              </div>
                                          </div>
                                          <p class="title">“{chap.libraryId}…”</p>
                                      </div>
                                      <button  style={{'display':localStorage.exp}} onClick={() => Redirect('',chap.id,chap.bookId)}>{translate!=null?translate[86].value:'Continue'}</button>
                                    <button id="disableMobileButton"   onClick={() => Redirect('restart',chap.id,chap.bookId)}>{translate!=null?translate[91].value:'Start'}</button>
                                  </div>
                              </>)
                          }
                      }
          )}
         
          
  
      </div>
      <div id="footer">
      <a href="#" onClick={() => Contacts()}> {translate!=null?translate[54].value:'Contact us'}</a>
          <a href="#" onClick={() => Copyrights()}> {translate!=null?translate[83].value:'זכויות יוצרים '}</a>
      </div>
          
          </>
  )
}



