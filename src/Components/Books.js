import React, { useState ,useEffect}  from "react";
import bookimg from '../assets/images/books/oldbook.png'
import logo from '../assets/images/logo-light.png'
import search1 from '../assets/images/search-pic.png'
import icon from '../assets/icons/avatar.svg'
import searchIcon from '../assets/icons/search.svg'
import accessibility from '../assets/icons/accessibility-light.svg'
import hamburger from '../assets/icons/hamburger.svg'
import searchdark from '../assets/icons/search-dark.svg'
import speaker from '../assets/icons/speaker.svg'
import {useNavigate } from 'react-router-dom'
import formTop from "../assets/images/formTop.svg"
import cancelForm from "../assets/images/cancelForm.svg"
import errorIcon from "../assets/images/errorIcon.svg"
import mic from "../assets/images/mic.svg"
import Isolation_Mode from "../assets/images/Isolation_Mode.svg"
import crossFileChoose from "../assets/images/crossFileChoose.svg"
import deleteIcon from "../assets/images/deleteIcon.svg"
import delete1 from "../assets/images/delete.svg"
import cancel1 from "../assets/images/cancel1.svg"
import edit from "../assets/images/edit.svg"
import menuCross from "../assets/images/menuCross.svg"
import menuICon from "../assets/images/menuICon.png"
import imgUpload from "../assets/images/imgUpload.svg"
import needHelp from "../assets/images/needHelp.svg"
import icons8down48 from "../assets/images/icons8-down-48.png"
import question from '../assets/icons/question.svg'
import '../assets/styles/book-library/book-library.css';
import axios from "axios";
import loader from '../assets/images/loader.gif'



export default function Books(){
const navigate = useNavigate();

const [msg,setMsg] = useState('');
const [books,setBooks] = useState([])    
const [filterBooks,setFilterBooks] = useState([])  
const [search,setSearch] = useState('');
const [geners,setGeners] = useState([]);
const [readinglevel,setReadingLevel] = useState([]);
const [textlength,setTextLength] = useState([]);
const [gener,setGenere] = useState('');
const [agegroup,setAgeGroup] = useState([]);

const [translate,setTransate] = useState()   

const [showing,setShowing] = useState()  
const [showingpopup,setShowingPopUp] = useState()  
const [showingpopupload2,setShowingPopUpLoad2] = useState()  
const [showingpopupload1,setShowingPopUpLoad1] = useState()  
const [showSubMenu,setShowSubMenu] = useState() 


const [showeditTextDetails,setEditTextDetails] = useState() 
const [showeditShowDelete,setShowDelete] = useState() 


const [showloader,setshowloader] = useState() 




let [chapterList,setChapterList] = useState([1])



const [readinglevelupload,setReadingLevelUpload] = useState('');
const [textlengthupload,setTextLengthUpload] = useState('');
const [generupload,setGenereUpload] = useState('');
const [agegroupupload,setAgeGroupUpload] = useState('');





const readMore =(id,name,author)=>{

    localStorage.loginDate = Date.now()
    localStorage.bookname=name;
    localStorage.author = author
    navigate('/chapters?id='+id)

}


const showBooks =()=>{
    navigate('/books')
}

const AddChapterList=() =>{
debugger;
    chapterList.push(1);  
    let tmp = [...chapterList];
    setChapterList(tmp)


}


const clickShowingPopUp=() =>{

    closeMenu();
    setShowing(false)
    setShowingPopUp( !showingpopup );
     setShowing( !showing );
}
const closeTxtGeneratorModal=() =>{

    setShowing(false)
    setShowingPopUp(false)
    setShowingPopUp( !showingpopup );
}



const clickShowingPopUpLoad1=() =>{

    closeMenu();
    setShowing(false)
    setShowingPopUp(false)
    setChapterList([])
     setShowingPopUpLoad1( !showingpopupload1 );
     setShowingPopUpLoad2( false );
}
const clickShowingPopUpLoad2=(is2) =>{
    debugger;
    setShowing(false)
    setShowingPopUp(false)
    document.getElementById('uploadfilebookname').value = document.getElementById('uploadfilebookname1').value;
    setChapterList([])
    
    if(is2)
    setShowingPopUpLoad1( !showingpopupload1 );
    
    setShowingPopUpLoad2( !showingpopupload2 );
    
}
const closeTxtGeneratorModalLoad2=() =>{

    setShowingPopUpLoad2( !showingpopupload2 );
    setShowingPopUpLoad1( !showingpopupload1 );
}
const closeTxtGeneratorModalLoad1=() =>{

    setShowingPopUpLoad1( !showingpopupload1 );
    
}

const clickEditTextDetails=() =>{

    setEditTextDetails( !showeditTextDetails );
}
const clickShowDelete=() =>{

    setShowDelete( !showeditShowDelete );
}






const clickShowingSubMenu=(id) =>{
    debugger;
    for(var i=0;i<document.getElementsByClassName('actionDropDown').length;i++)
    {
        if(document.getElementsByClassName('actionDropDown')[i].getAttribute('name')!=id)
        {
        document.getElementsByClassName('actionDropDown')[i].style.display='none';
        }
    }
    if(document.getElementsByName(id)[0].style.display=='none')
    {
        document.getElementsByName(id)[0].style.display='block';
    }
    else
    {
        document.getElementsByName(id)[0].style.display='none';
    }
    //setShowSubMenu( !showSubMenu );
}






const Profile=() =>{

    if(localStorage.role=="Admin" || localStorage.role=="Organization Manager")
    navigate('/institute')
    else
    navigate('/account')
}
const ShowSummary=(that)=>{

    if(document.getElementById(that.i).classList.contains('line'))
    {
        document.getElementById(that.i).classList.remove('line')
    }
    else
    {
        document.getElementById(that.i).classList.add('line')
    }
    
}

const Copyrights= ()=>{
    navigate('/Privacy');
  }
  const Contacts= ()=>{
    navigate('/Contacts');
  }
  const Help= ()=>{
    navigate('/Help');
  }

const SummeryAudio=(id)=>{

   //  fetch('https://localhost:44318/api/Books/GetBookSummery?id='+id)
    fetch('https://api.readupp.com/api/Books/GetBookSummery?id='+id)
    .then(async response => {
        debugger;
        const data = await response.json();
        document.getElementById('carteSoudCtrl').src = "/Files/"+data.path;
        document.getElementById('carteSoudCtrl').load();
        document.getElementById('carteSoudCtrl').play();
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });

    

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



const NameAudio=(id)=>{
    
   //  fetch('https://localhost:44318/api/Books/GetBookAudioName?id='+id)
    fetch('https://api.readupp.com/api/Books/GetBookAudioName?id='+id)
    .then(async response => {

        const data = await response.json();
        document.getElementById('carteSoudCtrl').src = "/Files/"+data.path;
        document.getElementById('carteSoudCtrl').load();
        document.getElementById('carteSoudCtrl').play();
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
    
    
}
const [file, setFile] = useState()
  const [filename,setFilename] = useState('');

  const [chaptersfile, setChaptersFile] = useState([])
  const [filechaptersname,setFileChaptersname] = useState([]);

  const onChangeHandler=(event)=>{
    
    console.log(event.target.files[0]);
    setFile(event.target.files[0])
    
    setFilename(event.target.files[0].name);
    

}

const onChangeHandlerChap=(event)=>{
    debugger;
    if(document.getElementsByClassName('chaptername').length>0 && event.target!=undefined && event.target.files[0]!=undefined)
    {
  
    console.log(event.target.files[0]);
    chaptersfile.push(event.target.files[0]);
    let tmp = [...chaptersfile];
    setChaptersFile(tmp)
    
    filechaptersname.push(event.target.files[0].name);
    let tmpchapters = [...filechaptersname];
    setFileChaptersname(tmpchapters);
    
    }

}

function handleSubmit(event) {
    debugger;
    let bookname = document.getElementById('uploadfilebookname').value;
    let chapters = document.getElementsByClassName('chaptername');
    let chapterStr='';
    for(var i=0;i<chapters.length;i++)
    {
        chapterStr+=chapters[i].value+';';
    }
  
    
  //  const url = 'https://localhost:44318/api/Books/UploadFiles';
    const url =  'https://api.readupp.com/api/Books/UploadFiles';
    const formData = new FormData();
    formData.append('bookName', bookname);
    formData.append('chaptersNames', chapterStr);
    formData.append('bookFile', file);
    formData.append('userId',localStorage.userId)


    formData.append('author', document.getElementById('author').value);
    formData.append('undername', document.getElementById('undername').value);
    formData.append('language', document.getElementById('language').value);
    formData.append('agegroup', document.getElementById('agegroup').value);
    formData.append('style', document.getElementById('style').value);
    formData.append('voice', document.getElementById('voice').value);
    formData.append('message', document.getElementById('message').value);


    chaptersfile.forEach((file,i) => formData.append(`chaptersFiles`,file));
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    setMsg('files uploaded...')
    setshowloader(true);
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
      setshowloader(false);
      setMsg('files uploaded! please wait 5 minutes for the book to be created.')
      
    });

  }


const Logout= ()=>{
    localStorage.removeItem('loginDate')
    navigate('/');
  }
  const lang= (val)=>{
    debugger;
    if(val==1)
    navigate('/books');
    else
    navigate('/booksrtl');
  }
const doSearch =()=>{
    let tmp=[]

    for(var i=0;i<books.length;i++)
    {
        if(books[i].bookName.includes(search) && (gener=="" || gener=="0" ||  books[i].gener==gener))
        {
            tmp.push(books[i]);
        }
    }
    setFilterBooks(tmp);

}

useEffect(() => {
    debugger;

    //fetch('https://localhost:44318/api/UserSettings/GetReadupEn')
      fetch('https://api.readupp.com/api/UserSettings/GetReadupEn')
      .then(async response => {
          const data = await response.json();
          setTransate(data);
          
      })
      .catch(error => {
          
      });


  //  fetch('https://localhost:44318/api/Books/GetReadupBooks')
    fetch('https://api.readupp.com/api/Books/GetReadupBooks?id='+localStorage.userId)
    .then(async response => {
        const data = await response.json();
        setBooks(data);
        setFilterBooks(data);
        localStorage.loginDate = Date.now()
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });

    
   // fetch('https://localhost:44318/api/Genre/GetGenres')
    fetch('https://api.readupp.com/api/Genre/GetGenres')
    .then(async response => {
        const data = await response.json();
        setGeners(data);
        localStorage.loginDate = Date.now()
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });


    fetch('https://api.readupp.com/api/ReadLevel/GetReadingLevels')
    .then(async response => {
        const data = await response.json();
        setReadingLevel(data);
        localStorage.loginDate = Date.now()
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });



    fetch('https://api.readupp.com/api/TextLength/GetTextLength')
    .then(async response => {
        const data = await response.json();
        setTextLength(data);
        localStorage.loginDate = Date.now()
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });

    fetch('https://api.readupp.com/api/AgeGroup/GetAgeGroup')
    .then(async response => {
        const data = await response.json();
        setAgeGroup(data);
        localStorage.loginDate = Date.now()
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
   
    setChapterList(chapterList)
    setshowloader(false);
},[])




    return( <>
      <div class="mobileMenu" id="mobileMenu">
        <div class="inner">
            <img src={menuCross} onClick={() => closeMenu()} class="menuCross" alt="menuCross"/>
            <ul>
                <ul style={{'padding-left': '0rem'}}>
                    <li onClick={() => showDropDown()}><img src={icons8down48} alt=""/> {translate!=null?translate[51].value:'Add your text'} </li>
                    <div id="myDropdown" class="drowDown">
                        <li><a onClick={() => clickShowingPopUp()}>{translate!=null?translate[52].value:'Create Text Generator'} </a></li>
                        <li><a onClick={() => clickShowingPopUpLoad1()}>{translate!=null?translate[53].value:'Upload text file'} </a></li>
                    </div>
                </ul>
                <li><a onClick={() => Contacts()}>{translate!=null?translate[54].value:'Contact us'}</a></li>
                <li><a onClick={() => Help()}>{translate!=null?translate[55].value:'Help'}</a></li>
                <li><a onClick={() => Copyrights()}>{translate!=null?translate[56].value:'Copyrights'}</a></li>
                <li><a href="#">{translate!=null?translate[1].value:'accessibility tatement'}</a></li>
                <li>
                    <div class="dropDown">
                    <div id="selectLang">
                        <select onChange={(e)=>lang(e.target.value)} name="dropdown" style={{'color':'#44c6cb'}}>
                            <option  value="1" selected>English</option>
                            <option  value="2" >עברית</option>
                    
                        </select>
                        </div>
                    </div>
                </li>
                <li><a onClick={() => Logout()}>{translate!=null?translate[50].value:'Log Out'}   </a></li>
            </ul>
        </div>
    </div>
    


    <div class="header">
        <div class="left">
        <img src={icon} alt="" onClick={() => Profile()}/>
            <a href="#" onClick={() => Logout()}>{translate!=null?translate[12].value:'Logout'}</a>
            <div class="dropDown">
                <select onChange={(e)=>lang(e.target.value)} name="dropdown" style={{'color':'#44c6cb'}}>
                    <option  value="1" selected>English</option>
                    <option  value="2" >עברית</option>
                  
                </select>
            </div>
        </div>
        <div class="center">
        <img src={logo} alt="" />
        </div>
      
        <div class="right">
            <div class="menu" style={{'margin-top':'17px'}}>
                <div class="addTxt">
                    <p onClick={() => setShowing( !showing )}>{translate!=null?translate[51].value:'Add your text'}</p>
                    <div class="addTxtDropDown" id="addtxt" style={{ display: (showing ? 'block' : 'none') }}>
                        <div class="sqaure">
                        <img src={hamburger} alt="" />
                            <div class="inner">
                                <span onClick={() => clickShowingPopUp()}>
                                {translate!=null?translate[52].value:'Create Text generator'} 
                                </span>
                                <span onClick={() => clickShowingPopUpLoad1()}>
                                {translate!=null?translate[53].value:'Upload text file'}  
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="library">
                    <p onClick={() => showBooks()}> {translate!=null?translate[102].value:'Library'} </p>
                    
                </div>
            </div>
            <div class="icons">
            <img style={{'width':'16px'}} src={question} alt="" onClick={() => Help()}/>
                <img src={accessibility} alt="" />
            </div>
        </div>
        <div class="iconMenu">
            <img  onClick={() => showMenu()} src={menuICon} class="menuICon" alt="menuICon"/>
        </div>
    </div>



    <div  class="sidebar_container px-2" >
            <div class="container-fluid d-flex align-items-center h-100 justify-content-between">
                <details class="custom-select light">
                    <summary class="radios rtl">
                        <input
                            type="radio"
                            name="item-2"
                            id="default"
                            title="English"
                            checked />
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
                                    href="book-library.html"
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
                                    href="book-library.en.html"
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
        </div><div onclick="sidebar('')" class="page_container">
            <div
                class="search_container d-flex justify-content-between align-items-center"
            >
                <div class="w-100 d-flex flex-column">
                    <div class="d-flex flex-column flex-md-row gap-2 gap-md-4">
                        <h1 class="color1 f28 mb-0 fw600">{translate!=null?translate[7].value:'Search from'} </h1>

                        <select name="" id="" class="book_library f28 fw700 assistant">
                            <option class="assistant" value="Book Library">
                            {translate!=null?translate[102].value:'Book Library'}  
                            </option>
                        </select>
                    </div>
                    <br />
                    <br class="d-none d-md-block" />
                    <div class="search_fields row align-items-center gy-3">
                        <div class="col-6 col-lg-3">
                            <div class="selectdiv">
                                <select name="" id="">
                                    <option value="Language">{translate!=null?translate[55].value:'Language'} </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="selectdiv">
                                <select name="" id="" onChange={(e)=>setGenere(e.target.value)}>
                                <option value="0">{translate!=null?translate[89].value:'Genere'}</option>
                                {geners.map(g =>{
                                    return(
                                    <option value={g.id}>{g.value}</option>
                                    )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-lg-3">
                            <div class="inp_container">
                                <input type="text" name="" id="" placeholder={translate!=null?translate[90].value:'Free Search'} onChange={(e)=>setSearch(e.target.value)} />
                                <img
                                    class="pointer"
                                    src={searchdark}
                                    alt="" />
                            </div>
                        </div>
                        <div class="col-6 col-lg-3 mx-auto">
                            <button class="search_btn border-0" onClick={doSearch}>{translate!=null?translate[8].value:'Search'} </button>
                        </div>
                    </div>
                </div>
                <div class="d-none d-md-block ps-5">
                    <img src={search1} alt="" />
                </div>
            </div>
        </div><div onclick="sidebar('')" class="page_container">
            <div class="searched_list_container">
                <div class="container-fluid">
                    <div class="row">
                        {filterBooks.map((book,i) =>{
                                    return(
                    <><div class="searched_card col-12 py-3 px-4 px-md-5">
                                            <div class="row gy-4">
                                                <div class="col px-0">
                                                    <img
                                                        class="w-100"
                                                        src={book.image==undefined ? bookimg: 'data:image/png;base64,'+book.image}
                                                        alt="" />
                                                </div>
                                                <div class="col-9 col-md-6 ps-4 ps-md-5">
                                                    <div
                                                        class="h-100 d-flex flex-column justify-content-between py-2"
                                                    >
                                                        <h1 class="mb-0 color6 f22 fw800" style={{'cursor':'pointer'}} onClick={() => NameAudio(book.id)}>{book.bookName}</h1>
                                                        <p class="mb-0 color6 f14" >
                                                            {book.authorName}
                                                            <br />
                                                            {book.numberOfChapters} {translate!=null?translate[56].value:'Chapters'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-5 align-self-center">
                                                    <h1 class="f18 fw700">
                                                    {translate!=null?translate[57].value:'Summery'}
                                                        <img class="ms-1" src={speaker} alt="" onClick={() => SummeryAudio(book.id)}/>
                                                          <span style={{'float':'right'}}>
                                                            
                                                          <div class="action">
                                                                <span class="" id="actionBtn" onClick={() => clickShowingSubMenu(book.id)}>
                                                                    <p style={{'margin-top':'7px'}}>...</p>
                                                                    <h6>x</h6>
                                                                </span>
                                                                <div class="actionDropDown" name={book.id} id="detailAction">
                                                                    <div class="edit1"  onClick={() => clickShowingPopUpLoad1()}>
                                                                        <img src={edit} alt="edit"/>
                                                                        <p style={{'margin-bottom':'0px'}}>{translate!=null?translate[58].value:'Edit Text Details'}</p>
                                                                    </div>
                                                                   
                                                                    <div class="edit1" onClick={() => clickShowingPopUpLoad2(false)}>
                                                                        <img src={edit} alt="edit"/>
                                                                        <p style={{'margin-bottom':'0px'}}>{translate!=null?translate[59].value:'Edit Chapters Details'}</p>
                                                                    </div>
                                                                 
                                                                    <div class="edit1" onClick={() => clickShowDelete()}>
                                                                        <img src={deleteIcon} alt="Delete"/>
                                                                        <p style={{'margin-bottom':'0px'}}>{translate!=null?translate[60].value:'Delete'}</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                          </span>
                                                    </h1>
                                                  
                                                    <p id={i} style={{'cursor':'pointer'}} class="mb-0 color5 f16 line" onClick={() => ShowSummary({i})}>
                                                    {book.summery}...
                                                       
                                                    </p>
                                                    <button onClick={() => readMore(book.id,book.bookName,book.authorName)}
                                                            class="fw700 color1 text-decoration-underline border-0 bg-transparent ps-1 f16"
                                                        >
                                                            {translate!=null?translate[61].value:'Read More'}
                                                        </button >
                                                </div>
                                            </div>

                                            
                                        </div><hr class="mb-0" /></>
                                    )

                        })}

                        
                        
                    </div>
                </div>
            </div>
            <audio  controls id="carteSoudCtrl" aria-hidden="true">
		<source src="/Files/play.mp3" type="audio/mpeg"></source>
		Your browser does not support the audio element.
	</audio>


    
     
    <div class="createTxtGeneratorModal" id="createTxtGeneratorModal" style={{ display: (showingpopup ? 'block' : 'none') }}>
        <div class="edit" style={{'overflow': 'auto'}}>
            <div class="inner" style={{'margin-top': '50% !important'}}>
                <div class="headerFile">
                    <img src={formTop} class="topIcon" alt="form Icon"/>
                    <img src={cancelForm} onClick={() => closeTxtGeneratorModal()} class="cancelForm"
                        alt="cancel Form"/>
                    <h2>  {translate!=null?translate[52].value:'Create Text Generator'}</h2>
                    <br/>
                    <p>{translate!=null?translate[62].value:'AI Text Builder brings your visions to'} <br/> {translate!=null?translate[63].value:'life with just a few keystrokes.'} </p>
                </div>

                <div class="mianContent">
                    <h3>{translate!=null?translate[65].value:'Text Details'}</h3>
                    <form action="#">
                        <div class="row">
                            <div class="floating-label-group">
                                <label class="input">
                                    <select class="input__field" required>
                                        <option value="" disabled hidden></option>
                                        <option value="lang1" selected>English</option>
                                        <option value="lang2">עברית</option>
                                       
                                    </select>
                                    <span class="input__label" id="input__lable"
                                        style={{'color':'#6f6f6f'}}>{translate!=null?translate[55].value:'Language'}</span>
                                </label>
                            </div>

                            <div class="floating-label-group">
                                <label class="input">
                                   <select class="input__field" required name="style" id="genereuploadid" onChange={(e)=>setGenereUpload(e.target.value)}>
                                            <option value="0"></option>
                                            {geners.map(g =>{
                                                return(
                                                <option value={g.id}>{g.value}</option>
                                                )
                                                })}
                                            </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}>Genere</span>
                                </label>
                            </div>
                            <div class="floating-label-group">
                                <label class="input">
                                    <select class="input__field" required>
                                        <option value=""  disabled hidden></option>
                                        <option value="Male" selected>Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}>{translate!=null?translate[68].value:'Narrator voice  '}
                                        </span>
                                </label>
                            </div>
                            <div class="floating-label-group" style={{'visibility':'hidden'}}>
                                <label class="input">
                                    <select class="input__field" required>
                                        <option value=""  disabled hidden></option>
                                        <option value="xxx" >xxx</option>
                                        <option value="yyy">yyy</option>
                                    </select>
                                   
                                </label>
                            </div>
                          
                            <div class="floating-label-group">
                            <label class="input">
                                   <select class="input__field" required name="" id="readinglevel" onChange={(e)=>setReadingLevelUpload(e.target.value)}>
                                            <option value="0"></option>
                                            {readinglevel.map(g =>{
                                                return(
                                                <option value={g.id}>{g.value}</option>
                                                )
                                                })}
                                            </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}>{translate!=null?translate[67].value:' רמת קריאה '} </span>
                                </label>
                            </div>

                            <div class="floating-label-group">
                            <label class="input">
                                   <select class="input__field" required name="" id="textlength" onChange={(e)=>setTextLengthUpload(e.target.value)}>
                                            <option value="0"></option>
                                            {textlength.map(g =>{
                                                return(
                                                <option value={g.id}>{g.value}</option>
                                                )
                                                })}
                                            </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}>{translate!=null?translate[66].value:'Text Length '} </span>
                                </label>
                            </div>

                            <div class="floating-label-group">
                                
                            </div>
                        </div>



                        <div class="">
                            <h3 style={{'margin-bottom': '5px','margin-top': '30px'}}>{translate!=null?translate[64].value:'My Request	'} </h3>
                            <div id="selectLang" style={{'text-align': 'left !important','displayp': 'block'}}>
                                <p>{translate!=null?translate[55].value:'שפה'} </p>
                                <select style={{'margin-bottom': '14px'}}>
                                    <option value="eng">English</option>
                                    <option value="eng2">English 2</option>
                                    <option value="eng3">English 3</option>
                                    <option value="eng4">English 4</option>
                                </select>
                            </div>
                            <label class="input" style={{'margin-bottom': '16px'}}>
                                <textarea style={{'width':'100%','background':'#fff','height': '175px','position': 'relative'}} 
                                    name="message" id="message"
                                    placeholder="Type or record the request for the text you want to generate"></textarea>
                                <img src={mic} id="mic" alt=""/>
                            </label>
                            <div id="errorMessage"  style={{'display': 'none'}}>
                                <img src={errorIcon} alt="error Icon"/>
                                <p style={{'margin-top': '13px'}}>{translate!=null?translate[82].value:' In order to create a text, you have to select a narrator   '}</p>
                            </div>
                        </div>


                        <div id="nextBtn">
                            <button >{translate!=null?translate[103].value:' Next   '}</button>
                        </div>
                    </form>
                </div>




       
            </div>
        </div>
    </div>

 




    <div id="editTxtModal" class="editTxtModal" style={{ display: (showingpopupload1 ? 'block' : 'none'),'overflow':'auto' }}>
        <div class="edit" style={{'overflow': 'auto'}}>
            <div class="inner" style={{'margin-top': '50% !important'}}>
                <div class="headerFile">
                    <img src={formTop} class="topIcon" alt="form Icon"/>
                    <img src={cancelForm} onClick={() => closeTxtGeneratorModalLoad1()} class="cancelForm" alt="cancel Form"/>
                    <h2>Upload text file</h2>
                    <p>First of all, fill your text details</p>
                </div>
                <div class="mianContent">
                    <h3>01 | Text Details</h3>
                    <form action="#">
                        <div class="row">
                            <div class="floating-label-group">
                                <input type="text" id="uploadfilebookname1" class="form-control" autocomplete="off" autofocus
                                    required />
                                <label class="floating-label"  style={{'margin-left':'10px'}}>{translate!=null?translate[73].value:' Book name  '} </label>
                            </div>

                            <div class="floating-label-group">
                                <input type="text" id="author" class="form-control" autocomplete="off" required />
                                <label class="floating-label" style={{'margin-left':'10px'}}>{translate!=null?translate[79].value:' Author   '}</label>
                            </div>
                            <div class="floating-label-group">
                                <input type="text" id="undername" class="form-control" autocomplete="off" required />
                                <label class="floating-label" style={{'margin-left':'10px'}}>{translate!=null?translate[80].value:' Username   '}</label>
                            </div>
                            <div class="floating-label-group">
                                <label class="input">
                                    <select class="input__field" required id="language">
                                        <option value="" selected disabled hidden></option>
                                        <option value="eng">English</option>
                                        <option value="heb">עבית</option>
                                    </select>
                                    <span class="input__label" id="input__lable"
                                        style={{'color': '#6f6f6f'}}>{translate!=null?translate[55].value:'Language'}</span>
                                </label>
                            </div>

                            <div class="floating-label-group">
                            <label class="input">
                                   <select class="input__field" required name="" id="agegroup" onChange={(e)=>setAgeGroupUpload(e.target.value)}>
                                            <option value="0"> </option>
                                            {agegroup.map(g =>{
                                                return(
                                                <option value={g.id}>{g.value}</option>
                                                )
                                                })}
                                            </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}>{translate!=null?translate[78].value:' Age Group   '} </span>
                                </label>
                            </div>
                            <div class="floating-label-group">
                            <label class="input">
                                   <select class="input__field" required name="" id="style" onChange={(e)=>setGenereUpload(e.target.value)}>
                                            <option value="0"></option>
                                            {geners.map(g =>{
                                                return(
                                                <option value={g.id}>{g.value}</option>
                                                )
                                                })}
                                            </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}>Genere</span>
                                </label>
                            </div>

                            <div class="floating-label-group">
                                <label class="input">
                                    <select class="input__field" required id="voice">
                                        <option value=""  disabled hidden></option>
                                        <option value="male" selected>Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <span class="input__label" id="input__lable" style={{'color': '#6f6f6f'}}>
                                    {translate!=null?translate[68].value:'Narrator voice   '}</span>
                                </label>
                            </div>
                            <div class="floating-label-group" style={{'visibility':'hidden'}}>
                                <label class="input">
                                    <select class="input__field" required>
                                        <option value="" selected disabled hidden></option>
                                        <option value="xxx" >xxx</option>
                                        <option value="yyy">yyy</option>
                                    </select>
                                   
                                </label>
                            </div>
                           
                        </div>

                        <div  id="fileRow">
                            <label class="input">
                                <textarea name="message" id="message"
                                    placeholder="For example: the text deals with the subject"></textarea>
                                <span class="input__label" id="messageLabel" style={{'color': '#6f6f6f'}}>Description</span>
                            </label>
                            <div id="img">
                            <div class="file-input" >
                                <input type="file" accept="image/*" onChange={onChangeHandler}/>
                                <img src={imgUpload} alt=""/>
                                <div>{filename}</div>
                            </div>
                            <p>{translate!=null?translate[77].value:'Uploade picture '}<br/>
                                   </p> 
                            </div>
                        </div>

       
                        <div id="line">

                        </div>

    
                        <div id="nextBtn">
                            <button onClick={() => clickShowingPopUpLoad2(true)}>{translate!=null?translate[99].value:' Next   '}</button>
                        </div>
                    </form>
                </div>
               
                </div>
            </div>
        </div>
    </div>









    
    <div id="editTxtModal" class="editTxtModal" style={{ display: (showingpopupload2 ? 'block' : 'none'),'overflow':'auto' }}>
        <div class="edit" style={{'overflow': 'auto'}}>
            <div class="inner" style={{'margin-top': '50% !important'}}>
                <div class="headerFile">
                    <img src={formTop} class="topIcon" alt="form Icon"/>
                    <img src={cancelForm} onClick={() => clickShowingPopUpLoad2()} class="cancelForm" alt="cancel Form"/>

                    <p>{translate!=null?translate[75].value:'Upload text file'}</p>
                    <p>{translate!=null?translate[76].value:'Upload your text to the book list'}</p>
                </div>
                
                <div class="mianContent">
                    <div class="headertxt">
                        <h3> 02 | {translate!=null?translate[56].value:'Chapters'}</h3>
                        <p>{translate!=null?translate[74].value:'Upload your text to the book list'}</p>
                    </div>
                    <div class="chapterMainContent">
                        <div class="row1"> 
                            <div style={{'display': 'flex','align-items':'center','width':'50%'}}>
                                <p>1</p>
                                <div class="floating-label-group">
                                    <input type="text" id="uploadfilebookname" class="form-control" autocomplete="off" autofocus
                                        style={{'width':'251px','height':'51px'}} required />
                                    <label class="floating-label">{translate!=null?translate[73].value:' Book name  '} </label>
                                </div>
                            </div>

                            <div class="file-input" style={{opacity: 0.4}}>
                                <input type="file" accept="image/*" onChange={onChangeHandler}/>
                                <img src={Isolation_Mode} alt=""/>
                                <div>{filename}</div>
                            </div>
                       

                        </div>
                     

                        {chapterList.map((item,index) => { 
                                return(
                                    <div class="row1"> 
                                    <div style={{'display': 'flex','align-items':'center'}}>
                                    <p>{index+1}</p>
                                    <div class="floating-label-group">
                                        <input type="text" id="bookname" class="form-control chaptername" autocomplete="off" autofocus
                                            style={{'width':'251px','height':'51px'}} required />
                                        <label class="floating-label">{translate!=null?translate[72].value:' Chapter name  '}  </label>
                                    </div>
                                    </div>
                                    <div class="file-input">
                                        <input type="file" accept=".jpg, .jpeg, .png,.txt,.bmp,.doc,.docx,.pdf" onChange={onChangeHandlerChap}/>
                                            <img src={Isolation_Mode} alt=""/>
                                            <div>{filechaptersname[index]}</div>
                                            <p>{translate!=null?translate[71].value:'Upload file'}</p>
                                </div>
                                    </div>
                                )
                                })}

                       
                       
                        <a href="#" onClick={() => AddChapterList()}>{translate!=null?translate[70].value:'+ Add chapter'} +</a>

                        <div class="btnsChapter" style={{'position': 'static','margin-top':'61px'}}>
                            <button class="back" onClick={() => closeTxtGeneratorModalLoad2()}>Back</button>
                            <button class="update" onClick={() => handleSubmit()}>Update</button>
                        </div>
                        <div style={{'color':'#0f4152'}}>{msg}</div> 
                        <div><img src={loader} style={{ display: (showloader ? 'block' : 'none') }} class="menuCross" alt="menuCross"/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="delete" id="delete" style={{ display: (showeditShowDelete ? 'block' : 'none') }}>
            <div class="dle">
                <div class="inner">
                    <img src={cancel1} onClick={() => clickShowDelete()} class="cancel" alt="cancel"/>
                    <div class="contentt">
                        <img src={delete1} class="deleteItem" alt="delete"/>
                        <h2>{translate!=null?translate[69].value:'Are you sure you want to delete this chapter?'}</h2>
                        <div class="btns">
                            <button onClick={() => clickShowDelete()}>NO!</button>
                            <button >Yes, delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    <div id="footer">
        <a href="#" onClick={() => Contacts()}>{translate!=null?translate[54].value:'Contact us'}</a>
        <a href="#" onClick={() => Copyrights()}>{translate!=null?translate[83].value:'Copy Rights'}</a>

       
    </div>
    
    </>
    );
}