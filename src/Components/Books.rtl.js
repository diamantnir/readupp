import React, { ChangeEvent,useState ,useEffect}  from "react";
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
import needHelp from "../assets/images/needHelp.svg"
import question from '../assets/icons/question.svg'
import imgUpload from "../assets/images/imgUpload.svg"

import menuCross from "../assets/images/menuCross.svg"
import menuICon from "../assets/images/menuICon.png"
import icons8down48 from "../assets/images/icons8-down-48.png"
import '../assets/styles/book-library/book-library.css';

import axios from "axios";
import loader from '../assets/images/loader.gif'






export default function Booksrtl(){
const navigate = useNavigate();



const [msg,setMsg] = useState('');
const [books,setBooks] = useState([])    
const [filterBooks,setFilterBooks] = useState([])  
const [search,setSearch] = useState('');
const [geners,setGeners] = useState([]);
const [readinglevel,setReadingLevel] = useState([]);
const [textlength,setTextLength] = useState([]);
const [agegroup,setAgeGroup] = useState([]);

const [gener,setGenere] = useState('');

const [translate,setTransate] = useState()   

const [showing,setShowing] = useState()  
const [showingpopup,setShowingPopUp] = useState()  
const [showingpopupload2,setShowingPopUpLoad2] = useState()  
const [showingpopupload1,setShowingPopUpLoad1] = useState()  
const [showSubMenu,setShowSubMenu] = useState() 


const [showeditTextDetails,setEditTextDetails] = useState() 
const [showeditShowDelete,setShowDelete] = useState() 

const [showloader,setshowloader] = useState() 

const [chapterList,setChapterList] = useState([1])



const [readinglevelupload,setReadingLevelUpload] = useState('');
const [textlengthupload,setTextLengthUpload] = useState('');
const [generupload,setGenereUpload] = useState('');
const [agegroupupload,setAgeGroupUpload] = useState('');






const readMore =(id,name,author)=>{

    localStorage.loginDate = Date.now()
    localStorage.bookname=name;
    localStorage.author = author
    navigate('/chaptersrtl?id='+id)

}
const showBooks =()=>{
    navigate('/booksrtl')
}
const AddChapterList=() =>{
    chapterList.push(1);  
    let tmp = [...chapterList];
    setChapterList(tmp)
   

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

const clickShowingPopUp=() =>{
    closeMenu();
    setShowingPopUp( !showingpopup );
     setShowing( !showing );
}
const closeTxtGeneratorModal=() =>{

    setShowingPopUp( !showingpopup );
}



const clickShowingPopUpLoad1=() =>{
    closeMenu();
    setShowing(false)
     setChapterList([])
     setShowingPopUpLoad1( !showingpopupload1 );
     setShowingPopUpLoad2( false );
}
const clickShowingPopUpLoad2=(is2) =>{
    debugger;
    setChapterList([])
    if(is2)
    setShowingPopUpLoad1( !showingpopupload1 );
    
    setShowingPopUpLoad2( !showingpopupload2 );
    
}
const closeTxtGeneratorModalLoad2=() =>{
    document.getElementById("myDropdown").classList.toggle("hide");
    debugger;
    setShowingPopUpLoad2( !showingpopupload2 );
    setShowingPopUpLoad1( !showingpopupload1 );
}
const closeTxtGeneratorModalLoad1=() =>{
    document.getElementById("myDropdown").classList.toggle("hide");
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
    navigate('/institutertl')
    else
    navigate('/accountrtl')
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
    navigate('/Privacyrtl');
  }
  const Contacts= ()=>{
    navigate('/Contactsrtl');
  }
  const Help= ()=>{
    navigate('/Helprtl');
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
  
    
    //const url = 'https://localhost:44318/api/Books/UploadFiles';
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
    setMsg('הקבצים עולים..')
    setshowloader(true)
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
      setshowloader(false);
      setMsg('הקבצים הועלו. אנא המתן 5 דקות כדי שתהליך יצירת הספר יסתיים.')
    });

  }





const SummeryAudio=(id)=>{

    // fetch('https://localhost:44318/api/Books/GetBookSummery?id='+id)
    fetch('https://api.readupp.com/api/Books/GetBookSummery?id='+id)
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

const Logout= ()=>{
    localStorage.removeItem('loginDate')
    navigate('/loginrtl');
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
    setMsg('')
    //fetch('https://localhost:44318/api/UserSettings/GetReadupHe')
      fetch('https://api.readupp.com/api/UserSettings/GetReadupHe')
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
},[chapterList])


    return( <>
      
      <div class="mobileMenu" id="mobileMenu">
        <div class="inner">
            <img src={menuCross} onClick={() => closeMenu()} class="menuCross" alt="menuCross"/>
            <ul>
                <ul style={{'padding-left': '0rem'}}>
                    <li onClick={() => showDropDown()}><img src={icons8down48} alt=""/>הוספת טקסט </li>
                    <div id="myDropdown" class="drowDown">
                        <li><a onClick={() => clickShowingPopUp()}>צור טקסט חדש</a></li>
                        <li><a onClick={() => clickShowingPopUpLoad1()}>העלאת טקסט</a></li>
                    </div>
                </ul>
                <li><a onClick={() => Contacts()}>צור קשר</a></li>
                <li><a onClick={() => Help()}>עזרה</a></li>
                <li><a onClick={() => Copyrights()}>זכויות יוצרים</a></li>
                <li><a href="#">נגישות</a></li>
                <li>
                    <div class="dropDown">
                        <div id="selectLang">
                        <select onChange={(e)=>lang(e.target.value)} name="dropdown" style={{'color':'#44c6cb'}}>
                            <option  value="1" >English</option>
                            <option  value="2" selected>עברית</option>
                    
                        </select>
                        </div>
                    </div>
                </li>
                <li><a onClick={() => Logout()}>יציאה</a></li>
            </ul>
        </div>
    </div>


    <div class="header">
        <div class="left">
        <img src={icon} alt="" onClick={() => Profile()}/>
            <a href="#" onClick={() => Logout()}>{translate!=null?translate[12].value:'Logout'}</a>
            <div class="dropDown">
                <select onChange={(e)=>lang(e.target.value)} name="dropdown" style={{'color':'#44c6cb'}}>
                    <option  value="1">English</option>
                    <option  value="2" selected>עברית</option>
                  
                </select>
            </div>
        </div>
        <div class="center">
        <img src={logo} alt="" />
        </div>
      
        <div class="right">
            <div class="menu" style={{'margin-top':'18px'}}>
                <div class="addTxt">
                    <p onClick={() => setShowing( !showing )}> {translate!=null?translate[51].value:'הוספת טקסט  '}</p>
                    <div class="addTxtDropDown" id="addtxt" style={{ display: (showing ? 'block' : 'none') }}>
                        <div class="sqaure">
                        <img src={hamburger} alt="" />
                            <div class="inner">
                                <span onClick={() => clickShowingPopUp()}>
                                {translate!=null?translate[52].value:'יצירת טקסט'} 
                                </span>
                                <span onClick={() => clickShowingPopUpLoad1()}>
                                {translate!=null?translate[53].value:'העלאת קובץ טקסט'} 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="library">
                    <p onclick="showLibaray()">{translate!=null?translate[102].value:'ספריה'} </p>
                    <div class="addTxtDropDown" id="library">
                        <div class="sqaure">
                        <img src={hamburger} alt="" />
                            <div class="inner">
                                <span>
                                    יצירת קובץ
                                </span>
                                <span>
                                    יצירת קובץ
                                </span>
                            </div>
                        </div>
                    </div>
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
                class="search_container d-flex justify-content-between align-items-center rtl"
            >
                <div class="w-100 d-flex flex-column">
                    <div class="d-flex flex-column flex-md-row gap-2 gap-md-4">
                        <h1 style={{'text-align':'right'}} class="color1 f28 mb-0 fw600">{translate!=null?translate[7].value:'Search from'} </h1>

                        <select name="" id="" class="book_library f28 fw700 assistant">
                            <option class="assistant" value="Book Library">
                            {translate!=null?translate[102].value:'ספרייה '}  
                            </option>
                        </select>
                    </div>
                    <br />
                    <br class="d-none d-md-block" />
                    <div class="search_fields row align-items-center gy-3">
                        <div class="col-6 col-lg-3">
                            <div class="selectdiv rtl">
                                <select name="" id="" class="rtl">
                                    <option value="Language"> {translate!=null?translate[55].value:'שפה'}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="selectdiv rtl">
                                <select name="" id="" class="rtl" onChange={(e)=>setGenere(e.target.value)}>
                                <option value="0">{translate!=null?translate[89].value:'זאנר'}</option>
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
                                <input type="text" name="" class="rtl" id="" placeholder={translate!=null?translate[90].value:'Free Search'} onChange={(e)=>setSearch(e.target.value)} />
                                <img
                                    class="pointer rtl"
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
                    <img src={search1} alt="" style={{'margin-left':'-15%'}}/>
                </div>
            </div>
        </div><div onclick="sidebar('')" class="page_container">
            <div class="searched_list_container">
                <div class="container-fluid rtl">
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
                                                <div class="col-9 col-md-6 ps-4 ps-md-5" style={{'direction':'right !important'}} >
                                                    <div
                                                        class="h-100 d-flex flex-column justify-content-between py-2"
                                                    >
                                                        <h1 class="mb-0 color6 f22 fw800" style={{'cursor':'pointer','text-align':'right'}} onClick={() => NameAudio(book.id)}>{book.bookName}</h1>
                                                        <p class="mb-0 color6 f14" style={{'text-align':'right'}}>
                                                            {book.authorName}
                                                            <br />
                                                             {book.numberOfChapters} {translate!=null?translate[56].value:'פרקים'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-5 align-self-center" style={{'text-align':'right'}}>
                                                    <h1 class="f18 fw700" style={{'float':'right'}}>
                                                    {translate!=null?translate[57].value:'סיכום'}
                                                        <img class="ms-1" src={speaker} style={{'margin-right':'5px'}} alt=""  onClick={() => SummeryAudio(book.id)}/>
                                                          <span style={{'float':'left'}}>
                                                            
                                                          <div class="action">
                                                                <span class="" id="actionBtn" onClick={() => clickShowingSubMenu(book.id)}>
                                                                    <p style={{'margin-top':'7px'}}>...</p>
                                                                    <h6>x</h6>
                                                                </span>
                                                                <div class="actionDropDown" name={book.id} id="detailAction" >
                                                                    <div class="edit1"  onClick={() => clickShowingPopUpLoad1()}>
                                                                        <img src={edit} alt="edit" style={{'margin-left':'10px'}}/>
                                                                        <p style={{'margin-bottom':'0px'}}>{translate!=null?translate[58].value:'ערוך פרטי טקסט  '} </p>
                                                                    </div>
                                                                   
                                                                    <div class="edit1" onClick={() => clickShowingPopUpLoad2(false)}>
                                                                        <img src={edit} alt="edit" style={{'margin-left':'10px'}}/>
                                                                        <p style={{'margin-bottom':'0px'}}>{translate!=null?translate[59].value:'ערוך פרטי פרקים  '}</p>
                                                                    </div>
                                                                 
                                                                    <div style={{'text-align':'right'}} class="edit1" onClick={() => clickShowDelete()}>
                                                                        <img src={deleteIcon} alt="Delete" style={{'margin-left':'10px'}}/>
                                                                        <p style={{'margin-bottom':'0px'}}>{translate!=null?translate[60].value:'מחיקה'}</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                          </span>
                                                    </h1>
                                                   
                                                    <p id={i} style={{'cursor':'pointer','text-align':'right','float':'right','clear':'both'}} class="mb-0 color5 f16 line" onClick={() => ShowSummary({i})}>
                                                    {book.summery}...
                                                       
                                                    </p>
                                                    <button style={{'float':'right','clear':'both'}} onClick={() => readMore(book.id,book.bookName,book.authorName)}
                                                            class="fw700 color1 text-decoration-underline border-0 bg-transparent ps-1 f16"
                                                        >
                                                            {translate!=null?translate[61].value:'קרא עוד'}
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


    
     
    <div class="createTxtGeneratorModal rtl" id="createTxtGeneratorModal" style={{ display: (showingpopup ? 'block' : 'none') }}>
        <div class="edit" style={{'overflow': 'auto'}}>
            <div class="inner">
                <div class="headerFile">
                    <img src={formTop} class="topIcon" alt="form Icon"/>
                    <img src={cancelForm} onClick={() => closeTxtGeneratorModal()} class="cancelForm"
                        alt="cancel Form"/>
                    <h2> {translate!=null?translate[52].value:'יוצר הטקסט AI'} </h2>
                    <br/>
                    <p>{translate!=null?translate[62].value:'AI יוצר הטקסט מביא את החזון שלך לחיים'} 
            <br/> {translate!=null?translate[63].value:'עם מספר הקשות בלבד.'}</p>
                </div>

                <div class="mianContent">
                    <h3>{translate!=null?translate[65].value:'פרטי הטקסט '}  </h3>
                    <form action="#">
                        <div class="row">
                            <div class="floating-label-group">
                                <label class="input">
                                    <select class="input__field" required>
                                        <option value=""  disabled hidden></option>
                                        <option value="lang1">English</option>
                                        <option value="lang2" selected>עברית</option>
                                    </select>
                                    <span class="input__label" id="input__lable"
                                        style={{'color': '#6f6f6f','margin-right':'10px'}}>{translate!=null?translate[55].value:'שפה'}</span>
                                </label>
                            </div>

                            <div class="floating-label-group">
                                <label class="input">
                                   <select class="input__field" required name="" id="" onChange={(e)=>setGenereUpload(e.target.value)}>
                                            <option value="0"></option>
                                            {geners.map(g =>{
                                                return(
                                                <option value={g.id}>{g.value}</option>
                                                )
                                                })}
                                            </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}>ז'אנר</span>
                                </label>
                            </div>
                            <div class="floating-label-group">
                                <label class="input">
                                    <select class="input__field" required>
                                        <option value="" selected disabled hidden></option>
                                        <option value="Male">גבר </option>
                                        <option value="Female">אישה </option>
                                    </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f','margin-right':'10px'}}>{translate!=null?translate[68].value:'קריין   '}
                                        </span>
                                </label>
                            </div>

                            <div class="floating-label-group" style={{'visibility':'hidden'}}>
                                <label class="input">
                                    <select class="input__field" required>
                                        <option value=""  disabled hidden></option>
                                        <option value="xxx" selected>xxx</option>
                                        <option value="yyy">yyy</option>
                                    </select>
                                   
                                </label>
                            </div>

                            <div class="floating-label-group">
                            <label class="input">
                                   <select class="input__field" required name="" id="" onChange={(e)=>setReadingLevelUpload(e.target.value)}>
                                            <option value="0"></option>
                                            {readinglevel.map(g =>{
                                                return(
                                                <option value={g.id}>{g.value}</option>
                                                )
                                                })}
                                            </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}> {translate!=null?translate[67].value:'Reading Level '}</span>
                                </label>
                            </div>

                            <div class="floating-label-group">
                            <label class="input">
                                   <select class="input__field" required name="" id="" onChange={(e)=>setTextLengthUpload(e.target.value)}>
                                            <option value="0"></option>
                                            {textlength.map(g =>{
                                                return(
                                                <option value={g.id}>{g.value}</option>
                                                )
                                                })}
                                            </select>
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}> {translate!=null?translate[66].value:'אורך טקסט '}</span>
                                </label>
                            </div>
                            <div class="floating-label-group">
                               
                            </div>
                        </div>



                        <div class="">
                            <h3 style={{'margin-bottom': '5px','margin-top': '30px'}}> {translate!=null?translate[64].value:'הבקשה שלי '} </h3>
                            <div id="selectLang" ><p> {translate!=null?translate[55].value:'שפה'} </p>
                                <select style={{'margin-bottom': '17px','margin-right':'4px','margin-top':'3px'}}>
                                    <option value="heb" selected>עברית</option>
                                    <option value="eng2" >english</option>
                                </select>
                        </div>
                                
                            <label class="input" style={{'margin-bottom': '16px'}}>
                                <textarea style={{'width':'100%','background':'#fff','height': '175px','position': 'relative'}} 
                                    name="message" id="message"
                                    placeholder="הקלד או הקלט את הבקשה לטקסט שברצונך ליצור"></textarea>
                                       <img src={mic} id="mic" alt=""/>
                            </label>
                            <div id="errorMessage"  style={{'display': 'none'}}>
                                <img src={errorIcon} alt="error Icon"/>
                                <p style={{'margin-top':'17px','margin-right':'20px'}}>{translate!=null?translate[82].value:' על מנת להמשיך יש למלא את השדה "אוצר מילים"  '}</p>
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






    <div id="editTxtModal rtl" class="editTxtModal" style={{ display: (showingpopupload1 ? 'block' : 'none'),'overflow':'auto' }}>
        <div class="edit rtl" style={{'overflow': 'auto'}}>
        <div class="inner" style={{'margin-top': '50% !important'}}>
                <div class="headerFile">
                    <img src={formTop} class="topIcon" alt="form Icon"/>
                    <img src={cancelForm} onClick={() => closeTxtGeneratorModalLoad1()} class="cancelForm" alt="cancel Form"/>
                    <h2>העלאת קובץ טקסט</h2>
                    <p>קודם כל, הכנס את פרטי הטקסט</p>
                </div>
                <div class="mianContent">
                    <h3>01 |  {translate!=null?translate[65].value:'פרטי הטקסט '}</h3>
                    <form action="#">
                        <div class="row">
                            <div class="floating-label-group">
                                <input type="text" id="bookname" class="form-control" autocomplete="off" autofocus
                                    required />
                                <label class="floating-label rtl" style={{'width':'83%'}}> {translate!=null?translate[73].value:' Book name  '} </label>
                            </div>

                            <div class="floating-label-group">
                                <input type="text" id="author" class="form-control" autocomplete="off" required />
                                <label class="floating-label rtl" style={{'width':'83%'}}>{translate!=null?translate[79].value:' סופר   '}</label>
                            </div>
                            <div class="floating-label-group">
                                <input type="text" id="undername" class="form-control" autocomplete="off" required />
                                <label class="floating-label rtl" style={{'width':'83%'}}>{translate!=null?translate[80].value:' שם משתמש   '} </label>
                            </div>
                            <div class="floating-label-group">
                                <label class="input">
                                    <select class="input__field" required id="language">
                                        <option value="" selected disabled hidden></option>
                                        <option value="lang1" selected>עברית</option>
                                        <option value="lang2">English</option>
                                    </select>
                                    <span class="input__label" id="input__lable"
                                        style={{'color': '#6f6f6f','margin-right':'10px'}}>{translate!=null?translate[55].value:'שפה'}</span>
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
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}>  {translate!=null?translate[78].value:'קבוצת גיל   '}</span>
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
                                    <span class="input__label" id="input__lable" style={{'color':'#6f6f6f'}}>ז'אנר</span>
                                </label>
                            </div>

                            <div class="floating-label-group" id="voice">
                                <label class="input">
                                    <select class="input__field" required>
                                        <option value="" selected disabled hidden></option>
                                        <option value="voice1">voice 1</option>
                                        <option value="voice2">voice 2</option>
                                        <option value="voice3">voice 3</option>
                                        <option value="voice4">voice 4</option>
                                    </select>
                                    <span class="input__label" id="input__lable" style={{'color': '#6f6f6f','margin-right':'10px'}}>
                                    {translate!=null?translate[68].value:'קריין   '}</span>
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
                            

                        <div  id="fileRow">
                            <label class="input">
                                <textarea name="message" id="message"
                                    placeholder="לדוגמא: הטקסט מתעסק בנושא"></textarea>
                                <span class="input__label" id="messageLabel" style={{'color': '#6f6f6f','margin-right':'10px'}}>תיאור</span>
                            </label>
                            <div id="img">
                                <div class="file-input">
                                    <input type="file" accept="image/*" onChange={onChangeHandler}/>
                                    <img src={imgUpload} alt=""/>
                                    <div>{filename}</div>
                                </div>
                                <p style={{'margin-top':'15px','margin-right':'10px'}}> {translate!=null?translate[77].value:'העלאת תמונה  '} <br/>
                                  </p>
                            </div>
                        </div>

       
                        <div id="line">

                        </div>

    
                        <div id="nextBtn">
                            <button onClick={() => clickShowingPopUpLoad2(true)}>{translate!=null?translate[99].value:' Next   '}</button>
                        </div>
                        </div>
                    </form>
                </div>
               
                </div>
            </div>
        </div>
    </div>









    
    <div id="editTxtModal rtl" class="editTxtModal" style={{ display: (showingpopupload2 ? 'block' : 'none'),'overflow':'auto' }}>
        <div class="edit rtl" style={{'overflow': 'auto'}}>
            <div class="inner" style={{'margin-top': '50% !important'}}>
                <div class="headerFile">
                    <img src={formTop} class="topIcon" alt="form Icon"/>
                    <img src={cancelForm} onClick={() => clickShowingPopUpLoad2()} class="cancelForm" alt="cancel Form"/>
                    <p>{translate!=null?translate[75].value:'  העלאת קובץ טקסט'}</p>
                    <p>{translate!=null?translate[76].value:'העלאת טקסט לרשימת ספרים'}</p>
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
                                    <input  type="text" id="uploadfilebookname" class="form-control" autocomplete="off" autofocus
                                        style={{'width':'230px','height':'51px'}} required />
                                    <label class="floating-label" >{translate!=null?translate[73].value:' שם ספר   '}  </label>
                                </div>
                            </div>

                            <div class="file-input" style={{opacity: 0.4}}>
                                <input type="file" accept="image/*" onChange={onChangeHandler}/>
                                <img src={Isolation_Mode} alt=""/>
                                <div>{filename}</div>
                            </div>
                       

                        </div>
                        
                        
                        {chapterList.map((item, index) => {
                                return (
                                    <div class="row1"> 
                                    <div style={{'display': 'flex','align-items':'center'}}>
                                    <p>{index+1}</p>
                                    <div class="floating-label-group">
                                        <input type="text"  class="form-control chaptername" autocomplete="off" autofocus
                                            style={{'width':'251px','height':'51px'}} required />
                                        <label class="floating-label"> {translate!=null?translate[72].value:' שם הפרק '}  </label>
                                    </div>
                                    </div>
                                    <div class="file-input">
                                        <input type="file" accept=".jpg, .jpeg, .png,.txt,.bmp,.doc,.docx,.pdf" onChange={onChangeHandlerChap}/>
                                            <img src={Isolation_Mode} alt="" />
                                            <div>{filechaptersname[index]}</div>
                                            <p>{translate!=null?translate[71].value:'העלאת קובץ '}  </p>
                                </div>
                                    </div>
                                )
                                })}

                       
                       
                        <a href="#" onClick={() => AddChapterList()}>{translate!=null?translate[70].value:' הוסף פרק '}+</a>

                        <div class="btnsChapter" style={{'position': 'static','margin-top':'61px'}}>
                            <button class="back" onClick={() => closeTxtGeneratorModalLoad2()}>חזרה</button>
                            <button class="update" onClick={() => handleSubmit()}>עדכון</button>
                           
                        </div>
                        <div style={{'color':'#0f4152'}}>{msg}</div>
                        <div><img src={loader} style={{ display: (showloader ? 'block' : 'none') }} class="menuCross" alt="menuCross"/></div>

                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="delete rtl" id="delete" style={{ display: (showeditShowDelete ? 'block' : 'none') }}>
            <div class="dle">
                <div class="inner">
                    <img src={cancel1} onClick={() => clickShowDelete()} class="cancel" alt="cancel"/>
                    <div class="contentt">
                        <img src={delete1} class="deleteItem" alt="delete"/>
                        <h2>{translate!=null?translate[69].value:'האם אתה בטוח שאתה מעוניין למחוק את הפרק?'} </h2>
                        <div class="btns">
                            <button onClick={() => clickShowDelete()}>לא!</button>
                            <button >כן, מחק </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div id="footer">
        <a href="#" onClick={() => Contacts()}> {translate!=null?translate[54].value:'Contact us'} </a>
        <a href="#" onClick={() => Copyrights()}>{translate!=null?translate[83].value:'Copy Rights'}  </a>

       
    </div>
    
    </>
    );
}