import React, { useRef,useContext, useState,useEffect }  from "react";
import search from '../assets/icons/search.svg'
import accessibility from '../assets/icons/accessibility-light.svg'
import hamburger from '../assets/icons/hamburger.svg'
import downArrow from '../assets/icons/downArrow.svg'
import back1 from '../assets/icons/back.svg'
import twoLeft from '../assets/icons/twoLeft.svg'
import set from '../assets/images/set.png'
import sett from '../assets/images/sett.png'
import mar from '../assets/images/mar.png'
import marno from '../assets/images/mar-no.png'
import logolight from '../assets/images/logo-light.png'
import maga1 from '../assets/images/maga1.png'
import re from '../assets/images/re.png'
import playbtn from '../assets/images/play.png'
import pausebtn from '../assets/images/pause.png'
import logo from '../assets/images/logo-light.png'
import question from '../assets/icons/question.svg'
import fwd from '../assets/images/fwd.png'
import maga2 from '../assets/images/maga2.png'
import needHelp from "../assets/images/needHelp.svg"
import '../assets/styles/reader/reader.css';

import {useNavigate } from 'react-router-dom'

import icon from '../assets/icons/avatar.svg'

import menuCross from "../assets/images/menuCross.svg"
import menuICon from "../assets/images/menuICon.png"
import icons8down48 from "../assets/images/icons8-down-48.png"
const query = new URLSearchParams(window.location.search);


export default function Playerrtl(){
    const navigate = useNavigate();

    const [chapterId,setChapterId] = useState('');
    const [bookid,setBookid] = useState('');
    const [restart,setRestart] = useState('');

    const [translate,setTransate] = useState()   

    let [fontsize,setFontsize] = useState('30');

    const [stopbtn,setStop] = useState('');
    const [pause,setPause] = useState('');
    let [play,setPlay] = useState('');
    const [backnextbutton,setbacknextbutton] = useState('');

    const [showpause,setshowpause] = useState('');
    const [showplay,setshowplay] = useState('');
    const [showecho,setshowecho] = useState('');
    

    const [freeze,setfreeze] = useState(false);
    const [first,setfirst] = useState(false);
    const [lightgrey,setlightgrey] = useState(false);
    const [text,setText] = useState('');
    const [chapterNameEng,setChapterNameEng] = useState('');
    
    const [marker,setMarker] = useState('');
    const [read,setRead] = useState('');
    const [echo,setEcho] = useState('');
    const [timing,setTiming] = useState('0');

    const [speed,setSpeed] = useState('0');

    let [addtime,setAddtime] = useState(0);

    let [repit,setRepit] = useState(false);
    
    

    //settings
    const [settingSaved,setSettingSaved] = useState('');
    const [showTiming,setShowTiming] = useState('none');


    
    const SaveSettings=() =>{
      debugger;
      localStorage.timing = timing;
      stopEcho();
      const UserSettings ={'userId':localStorage.userId,'echo':echo,'read':read,'marker':marker}
      debugger;
   //   fetch('https://localhost:44318/api/UserSettings/UpdateUserSettings',{
      fetch('https://api.readupp.com/api/UserSettings/UpdateUserSettings',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(UserSettings)
    })
    .then(response => response.json())
    .then(data =>
    {
        
          setSettingSaved('Setting saved!')
          window.location.reload();

          
        
    })
    .catch(() => {

    });
    }
    const ChangeRead=(read) =>{
      setRead(read)
      if(read=='timing')
        setShowTiming('block')
      else
        setShowTiming('none')

        document.getElementById('continuous').style.border="";
        document.getElementById('auto').style.border="";
        document.getElementById('timing').style.border="";
        document.getElementById('manual').style.border="";
        document.getElementById(read).style.border="1px solid black";

        if(read=='continuous')
        {
            setshowecho('none')
            ChangeEcho('noecho')
        }
        else
        {
            setshowecho('block')
        }
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
  

    const ChangeEcho=(echo) =>{
      
      setEcho(echo)
        document.getElementById('echo').style.border="";
        document.getElementById('noecho').style.border="";
        document.getElementById(echo).style.border="1px solid black";
    }

    const ChangeMarker=(marker) =>{
      setMarker(marker)
        document.getElementById('yellow').style.backgroundColor="lightgrey";
        document.getElementById('none').style.backgroundColor="lightgrey";
        document.getElementById('underline').style.backgroundColor="lightgrey";
        document.getElementById('grey').style.backgroundColor="lightgrey";
        document.getElementById(marker).style.backgroundColor="#44c6cb";
    }
    

    
    //

    let playRef = useRef();


    var sentence;
    var loopCount;
    var micid =0;
    const myInterval = useRef();


    useEffect(() => {

      localStorage.button="";
    //  fetch('https://localhost:44318/api/UserSettings/GetReadupHe')
        fetch('https://api.readupp.com/api/UserSettings/GetReadupHe')
        .then(async response => {
            const data = await response.json();
            debugger;
            setTransate(data);
            
        })
        .catch(error => {
            
        });

        
      localStorage.lightgrey='false'
      localStorage.spoke="false"
      localStorage.fetch='false'
      debugger;
      setSpeed('0');
      if(localStorage.timing==undefined)
        setTiming(0)
      else
        setTiming(localStorage.timing);
      setShowTiming('none')
    setChapterId(getSearchParams('id'))
    setBookid(getSearchParams('bookid'))
    setRestart(getSearchParams('restart'))
    
    setshowpause('none');
    setshowplay('inline');

    setFontsize(30)
    chooseMarker('yellow');
    chooseRead('manual');
    chooseEcho('noecho');
    if (getSearchParams('restart') != null && getSearchParams('restart') == 'true') {
        stop()
    }
    else
        refresh()

        getUserSettings()
    
        window.strm=[]; 
        
    },[])

    const getUserSettings=() =>{
   //   fetch('https://localhost:44318/api/UserSettings/GetUserSettings?userId='+localStorage.userId)
      fetch('https://api.readupp.com/api/UserSettings/GetUserSettings?userId='+localStorage.userId)
            .then(async response => {
                const data = await response.json();
                if(data!=null)
                {
                  ChangeMarker(data.marker);
                  ChangeRead(data.read);
                  ChangeEcho(data.echo);
                }

                localStorage.loginDate = Date.now()
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
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
    const chooseMarker=(color) =>{
      setMarker(color);
    }
    const chooseRead=(read) =>{
        setRead(read);
    }
    const chooseEcho=(echo) =>{
        setEcho(echo);
    }

    const increaseText=() =>{
        
        if(fontsize<73)
        {
          fontsize = parseInt(fontsize)+2
            setFontsize(fontsize)
        }
    }
    const decreaseText=() =>{

       
        if(fontsize>16)
        {
          fontsize = parseInt(fontsize)-2
            setFontsize(fontsize)
        }
    }
    const showBooks =()=>{
      navigate('/booksrtl')
  }
    const mainLoop=() =>{
        setText(sentence.transcript);
        document.getElementById('carteSoudCtrl').src = "/Files/" + localStorage.userId + "/" + sentence.id + "_" + sentence.words + ".mp3";
        document.getElementById('carteSoudCtrl').load();
        document.getElementById('carteSoudCtrl').play();
        document.getElementById('carteSoudCtrl').onplaying = (event) => {
            highlight(sentence.wordsNavigation);
        };
    }
    const highlight=(words) =>{
        var duration = document.getElementById('carteSoudCtrl').duration;
        var time = duration * 1000;
        time = 0;
        myLoop(time);
    
    }
    
    const lang= (val)=>{
      const id = getSearchParams('id')
      const bookid = getSearchParams('bookid')
      if(val==1)
      navigate('/player?id='+id+'&bookid='+bookid);
      else
      navigate('/playerrtl?id='+id+'&bookid='+bookid);
    }

    const myLoop=(time) =>{
        setTimeout(() => onLoop(), time);
    }

    const onLoop=() =>{

        setfreeze(false);
        if(loopCount<sentence.wordsNavigation.length)
        {
            let time=0;
            if(localStorage.play=='true')
            {
                time = (sentence.wordsNavigation[loopCount].endTime - sentence.wordsNavigation[loopCount].startTime) * 1000;
                if (loopCount == sentence.wordsNavigation.length - 1)
                    if (time < 300)
                        time = 800;
                if (marker == "yellow")
                    color_word(sentence.transcript.trim().split(' ')[loopCount], loopCount, 'yellow');
                else if (marker == "grey")
                    color_word(sentence.transcript.trim().split(' ')[loopCount], loopCount, 'lightgrey');
                else if (marker == "underline")
                    color_word(sentence.transcript.trim().split(' ')[loopCount], loopCount, 'underline');
                else
                    color_word(sentence.transcript.trim().split(' ')[loopCount], loopCount, 'none');

                loopCount++;
                myLoop(time);             //  ..  again which will trigger another 
                localStorage.automatic = null;
            }
        }
        else
        {
            document.getElementById('text').innerHTML ="<span  class='lighterthengrey'>" + sentence.transcript + "</span>";
            setText(sentence.transcript);
            localStorage.lightgrey='true'
            setlightgrey(true);  
           
            localStorage.play='false'
           
        //    myInterval.current = setTimeout(() => {

              if (read == "manual") {
  
                  
                  setshowplay('inline')
                  setshowpause('none')
               //   document.getElementById('carteSoudCtrl').pause();
                  localStorage.button="pause";
                  setAddtime(0);
                  clearInterval(myInterval.current);

                  if (echo == "echo") {
                    debugger;
                      //  window.navigator.mediaDevices.getUserMedia({ audio: true }).then(onSuccess, onError);
                      startEcho();
  
  
              
                  
  
  
                  }
                  else if (echo == "noecho") {
  
                      var aaa = (new window.webkitSpeechRecognition)
                      aaa.continuous = true;
                      aaa.start();
  
                    
    
  
                  }

                }
              else if (read == "timing") {
                
                  if (echo == "echo") {
                      //window.navigator.mediaDevices.getUserMedia({ audio: true }).then(onSuccess, onError);
                      startEcho();
                  }
                  

                  clearInterval(myInterval.current);
                    debugger;
                    
                  
                  setshowplay('none')
                  setshowpause('inline')
                  setlightgrey(true)
                  if (echo == "echo") {
                    debugger;
                      //  window.navigator.mediaDevices.getUserMedia({ audio: true }).then(onSuccess, onError);
                      startEcho();
  
  
                  
  
  
                  }
                  else if (echo == "noecho") {
  
                      var aaa = (new window.webkitSpeechRecognition)
                      aaa.continuous = true;
                      aaa.start();
  
                    
    
  
                  }

                  addtime = parseInt(localStorage.timing)*1000;
                  setTimeout(function() { nextLine(); }, addtime);
  
              }
              else if (read == "continuous") {
                  if (echo == "echo") {
                      //  window.navigator.mediaDevices.getUserMedia({ audio: true }).then(onSuccess, onError);
                      startEcho();
                  }
                  setAddtime(0)
                  clearInterval(myInterval.current);

                  setshowplay('none')
                  setshowpause('inline')
                  if(localStorage.fetch=='false')
                    nextLine();
              }
              else if (read == "auto") {
                setAddtime(0)
                setshowplay('none')
                  setshowpause('inline')
                  clearInterval(myInterval.current);

                  if (echo == "echo") {
                    debugger;
                      //  window.navigator.mediaDevices.getUserMedia({ audio: true }).then(onSuccess, onError);
                      startEcho();
  
  
                      navigator.mediaDevices.getUserMedia({
                          audio: true
                      })
                          .then(stream => {
                              detectSilence(stream, onSilence, onSpeak, 2000, -50);
                              // do something else with the stream
                          }).catch(e => console.log(e));
                  
  
  
                  }
                  else if (echo == "noecho") {
  
                      var aaa = (new window.webkitSpeechRecognition)
                      aaa.continuous = true;
                      aaa.start();
  
                      navigator.mediaDevices.getUserMedia({
                          audio: true
                      })
                          .then(stream => {
                              detectSilence(stream, onSilence, onSpeak, 2000, -40);
                              // do something else with the stream
                          }).catch(e => console.log(e));
    
  
                  }
  
  
              }
       //   }, 1000 + (addtime * 1000));
        }
    }

    const pausenow=()=> {
       
      localStorage.button="pause";

        setshowpause('none');
        setshowplay('inline');
        localStorage.play='pause'
        localStorage.pause='true'
        document.getElementById('carteSoudCtrl').pause();
        stopEcho();
        setPlay(false);
        localStorage.play='false'
        setfirst(false);
        setPause(true);
        stopEcho();
        
    }

    const sleep=(milliseconds)=> {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }


    const color_word=(word, loopCount, color) => {
        if (sentence.wordsNavigation.length == 1 || (word!= undefined && sentence.transcript.trim() != word.trim())) {
            let words = sentence.transcript.trim().split(' ');
            if (loopCount == 999 || loopCount==words.length) {
              debugger;  
              document.getElementById('text').innerHTML ="<span style='font-family: Heebo Regular' class='lighterthengrey'>" + sentence.transcript + "</span>";
                setText(sentence.transcript);
                localStorage.lightgrey='true'
                setlightgrey(true);      
                sleep(1000);
            }
            else {
                words = words.map(function (item, index) { return index == loopCount ? "<span class='" + color + "' [class] ='" + color + "'}>" + word + '</span>' : item });
                let new_words = words.join(' ');
    
                document.getElementById('text').innerHTML=new_words;
            }
    
    
        }
        else {
    
            sleep(1000);
            if (text.includes('('))
            {
            document.getElementById('text').innerHTML ="<span style='font-family: Heebo Regular'>" + text.split(')')[0] + ")" + "</span>" + "<span style='font-family: Heebo Regular' class='lighterthengrey'>" + text.split(')')[1] + "</span>";
            setText( text.split(')')[0]);
            localStorage.lightgrey='true'
            setlightgrey(true);  
            }
            else
            document.getElementById('text').innerHTML ="<span style='font-family: Heebo Regular' class='lighterthengrey'>" + text + "</span>";
            localStorage.lightgrey='true'
            setlightgrey(true);  
            document.getElementById('text').innerHTML =document.getElementById('text').innerHTML.replace("[class] ='yellow'", "").replace("class='yellow'", "");
            document.getElementById('text').innerHTML =document.getElementById('text').innerHTML.replace("[class] ='underline'", "").replace("class='underline'", "");
            document.getElementById('text').innerHTML =document.getElementById('text').innerHTML.replace("[class] ='none'", "").replace("class='none'", "");
        }
    }

    const dorestart=() =>{
        setfreeze(false);
        loopCount=0;
        if(play==true && localStorage.fetch=='false')
        {
            setPause(false);
            setPlay(true);
            localStorage.play='true';
            setfirst(false);
            setlightgrey(false);
            localStorage.lightgrey='false'
            localStorage.fetch='true'
            
         //   fetch('https://localhost:44318/api/Player/GetNextLine?bookid='+bookid+'&chapterid='+query.get('id')+"&micid=0&userid="+localStorage.userId+'&repit='+repit+'&speed='+speed)
           fetch('https://api.readupp.com/api/Player/GetNextLine?bookid='+bookid+'&chapterid='+getSearchParams('id')+"&micid=0&userid="+localStorage.userId+'&repit='+repit+'&speed='+speed)
            .then(async response => {
              localStorage.fetch='false';

              if(localStorage.pause=='false')
              {
                setRepit(false)
                repit=false;
                const data = await response.json();
                sentence = data
                localStorage.play='true'
                setChapterNameEng(data.chapterNameEng)
                micid = sentence.id;
                if(sentence.wordsNavigation.length>0)
                  setTimeout(() => mainLoop(), sentence.wordsNavigation[sentence.wordsNavigation.length - 1].endTime + 0.1);
              //  else
              //  setTimeout(() => mainLoop());

                localStorage.loginDate = Date.now()
              }
              else
                {
                  setRepit(true);
                }
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });

        }
    }


    const stop=() =>{
      stopEcho();
      clearInterval(myInterval.current);
localStorage.button="stop";
      setPause(false);
        setPlay(false);
        setRepit(true);
        localStorage.play='false';
        setbacknextbutton(false);
        loopCount=0;
        document.getElementById('carteSoudCtrl').src = 'aaa';
        document.getElementById('audio').pause();
        
     //   fetch('https://localhost:44318/api/Player/PrePareAudioStop?chapterid='+query.get('id')+"&usrId="+localStorage.userId)
        fetch('https://api.readupp.com/api/Player/PrePareAudioStop?chapterid='+getSearchParams('id')+"&usrId="+localStorage.userId)
            .then(async response => {
              document.getElementById('text').innerHTML ="";

              if(restart!=null && restart=='true')
                {

                    refresh();
                }
                else
                {
                    document.getElementById('carteSoudCtrl').src = "/Files/" + localStorage.userId + "/" + sentence.id + "_" + sentence.words + ".mp3";
                    document.getElementById('carteSoudCtrl').load();
                }

                localStorage.loginDate = Date.now()
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    const getSearchParams=(k)=> {
      var p = {};
      window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v })
      return k ? p[k] : p;
  }


    const refresh=() =>{
      debugger;
      
     //   fetch('https://localhost:44318/api/Chapters/GetChapterById?id='+getSearchParams('id'))
        fetch('https://api.readupp.com/api/Chapters/GetChapterById?id='+getSearchParams('id'))
            .then(async response => {
                const data = await response.json();
                setChapterNameEng(data.chapterNameEng)
                
              //  fetch('https://localhost:44318/api/Player/PrePareAudio?chapterid='+getSearchParams('id')+'&usrId='+localStorage.userId)
                fetch('https://api.readupp.com/api/Player/PrePareAudio?chapterid='+getSearchParams('id')+'&usrId='+localStorage.userId)
                .then(async response => {
                  
                //   fetch('https://localhost:44318/api/UserSettings/GetUserSettings?userId='+localStorage.userId)
                    fetch('https://api.readupp.com/api/UserSettings/GetUserSettings?userId='+localStorage.userId)
                    .then(async response => {
                             const data = await response.json();
                             if(data!=null)
                             {
                                chooseMarker(data.marker);
                                chooseRead(data.read);
                                chooseEcho(data.echo);
                             }
                        
    
                    })
                    .catch(error => {
    
                        
                    });
                    

                })
                .catch(error => {

                    
                });

                localStorage.loginDate = Date.now()
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }


    const Back=() =>{
      stopEcho();
        window.history.go(-1)
    }

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


    const OpenPopUp=() => {
      
      if(localStorage.button!="play")
      {
        stopEcho();
         document.getElementById('exampleModal').style.display = 'block';
         document.getElementById('exampleModal').style.opacity = '1';
         setSettingSaved('')
      }
 
        
     }

     const ClosePopUp=() => {
      debugger;
        document.getElementById('exampleModal').style.display = 'none';
        document.getElementById('exampleModal').style.opacity = '0';

    }

    const startEcho=()=> {
        if (navigator.getUserMedia) {
            navigator.getUserMedia(
                {
                    audio: {
                        latency: 0,
                        echoCancellation: false,
                        mozNoiseSuppression: true,
                        mozAutoGainControl: false
                    }
                },
                function (stream) {
                  
                    let aCtx = new AudioContext();
                    let microphone = aCtx.createMediaStreamSource(stream);
                    var destination = aCtx.destination;
                    microphone.connect(destination);
                    window.strm.push(stream);
                },
                function () { console.log("Error 003.") }
            );
        }
    }
    const stopEcho=()=> {
      debugger;
        if ( window.strm != null && window.strm!=undefined && window.strm.length>0) {
          for(var i=0;i<window.strm.length;i++)
          {
            if(window.strm[i].getTracks()!=null)
            for(var j=0;j<window.strm[i].getTracks().length;j++)
              {
                window.strm[i].getTracks()[j].stop()
              }
          }

        //  window.strm.getTracks().forEach(t=>window.strm.removeTrack(t))
        window.strm=[];
        }
    }

    const detectSilence=(stream, onSoundEnd = _ => { }, onSoundStart = _ => { }, silence_delay = 500, min_decibels = -80)=>  {
      const ctx = new AudioContext();
      const analyser = ctx.createAnalyser();
      const streamNode = ctx.createMediaStreamSource(stream);
      streamNode.connect(analyser);
      analyser.minDecibels = min_decibels;
  
      const data = new Uint8Array(analyser.frequencyBinCount); // will hold our data
      let silence_start = performance.now();
      let triggered = false; // trigger only once per silence event
  
      function loop(time) {
          requestAnimationFrame(loop); // we'll loop every 60th of a second to check
          analyser.getByteFrequencyData(data); // get current data
          if (data.some(v => v)) { // if there is data above the given db limit
              if (triggered) {
                  triggered = false;
                  onSoundStart();
              }
              silence_start = time; // set it to now
          }
          if (!triggered && time - silence_start > silence_delay) {
              onSoundEnd();
              triggered = true;
          }
      }
      loop();
  }


  var spoke = false;
  const onSilence=()=> {
    console.log('silence\n');
    if ( (read == "auto" && localStorage.pause=='false')) {
        nextLine();
      
        localStorage.spoke="false"
        localStorage.lightgrey = "false"
    }
    stopEcho();
}
const onSpeak=()=> {
    if (read == "auto" && ( localStorage.lightgrey=="true" && localStorage.play=="false")) {
     
        localStorage.spoke="true"
        console.log('speaking\n');
        localStorage.lightgrey='false'
        setlightgrey(false);
    }
}

    const playnow=() =>{
      stopEcho();
      localStorage.button="play";

      localStorage.pause='false'
      localStorage.play='true'
      //  $('.playbutton').attr('aria-hidden', 'true');
     //   $('.pausebutton').attr('aria-hidden', 'false');
        stopEcho();
        if(pause )
        {
            document.getElementById('carteSoudCtrl').play();
            localStorage.play='true'
            setPause(false);
            setshowpause('inline');
            setshowplay('none');
            setPlay(true);
            play=true;
        }
        else
        {
            if (!freeze) {
                setPause(false);
                setshowpause('inline');
                setshowplay('none');
                setPlay(true);
                play=true;
                localStorage.play='true';
                stopEcho();
            //   $('#play').hide();
            //   $('#pause').show();
        
                if (lightgrey == true || first == true)
                    nextLine();
                else
                    dorestart();
            }
        }
    }

    let back=()=> {
       

            if (!backnextbutton && (pause || play==false || localStorage.play=='false')) {
                setbacknextbutton(true);
                setfirst(true)
                setPause(false);
                
            //    fetch('https://localhost:44318/api/Player/Back?bookid='+bookid+'&chapterid='+getSearchParams('id')+"&userid="+localStorage.userId)
                fetch('https://api.readupp.com/api/Player/Back?bookid='+bookid+'&chapterid='+getSearchParams('id')+"&userid="+localStorage.userId)
                .then(async response => {
                    const data = await response.json();
                    if (data != null )
                    {
                        sentence = data;
                        loopCount = 0;
                        setbacknextbutton(false);
                        document.getElementById('text').innerHTML=sentence.transcript;
                        setText(sentence.transcript);
                    }
                    
                    localStorage.loginDate = Date.now()
                })
                .catch(error => {
                    this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
    
               
            }
            
        
        }

    let next=()=> {
      stopEcho();

        if (!backnextbutton && (pause || play==false || localStorage.play=='false')) {
            setbacknextbutton(true);
            setPause(false);
            setfirst(true)
            
         //   fetch('https://localhost:44318/api/Player/Next?bookid='+bookid+'&chapterid='+query.get('id')+"&userid="+localStorage.userId)
            fetch('https://api.readupp.com/api/Player/Next?bookid='+bookid+'&chapterid='+getSearchParams('id')+"&userid="+localStorage.userId)
            .then(async response => {
                const data = await response.json();
                if (data != null )
                {
                    sentence = data;
                    loopCount = 0;
                    setbacknextbutton(false);
                    document.getElementById('text').innerHTML=sentence.transcript;
                    setText(sentence.transcript);
                }
                
                localStorage.loginDate = Date.now()
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });

           
        }
        
    
    }

    const nextLine=()=> {
        loopCount = 0;
        stopEcho();
        if(localStorage.fetch=='false')
        {
            setlightgrey(false)
            localStorage.lightgrey='false'
            localStorage.fetch='true';
            
          //  fetch('https://localhost:44318/api/Player/GetNextLine?bookid='+bookid+'&chapterid='+query.get('id')+"&micid=0&userid="+localStorage.userId+'&repit='+repit+'&speed='+speed)
            fetch('https://api.readupp.com/api/Player/GetNextLine?bookid='+bookid+'&chapterid='+getSearchParams('id')+"&micid=0&userid="+localStorage.userId+'&repit='+repit+'&speed='+speed)
            .then(async response => {
              localStorage.fetch='false';
                if(localStorage.pause=='false')
                {
                setRepit(false)
                repit=false;
                const data = await response.json();
                sentence = data;
                localStorage.play='true'

                setChapterNameEng(data.chapterNameEng)
                micid = sentence.id;
                if(sentence.wordsNavigation.length>0)
                  setTimeout(() => mainLoop(), sentence.wordsNavigation[sentence.wordsNavigation.length - 1].endTime + 0.1);
             //   else
             //   setTimeout(() => mainLoop());

                localStorage.loginDate = Date.now()
                }
                else
                {
                  setRepit(true);
                }
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
          }
    
        
    
        console.log('fin');
    
    }


    return( <>

<div class="mobileMenu" id="mobileMenu">
        <div class="inner">
            <img src={menuCross} onClick={() => closeMenu()} class="menuCross" alt="menuCross"/>
            <ul>
              
                <li><a onClick={() => Contacts()}>צור קשר</a></li>
                <li><a onClick={() => Help()}>עזרה</a></li>
                <li><a onClick={() => Copyrights()}>זכויות יוצרים</a></li>
                <li><a href="#">aנגישות</a></li>
                <li><a onClick={() => Logout()}>יציאה</a></li>
            </ul>
        </div>
    </div>

<div class="modal fade"
		 id="exampleModal"
		 tabindex="-1"
		 aria-labelledby="exampleModalLabel"
		 aria-hidden="true">
		<div class="modal-dialog preference_modal">
			<div class="modal-content">
				<div class="container-fluid">
					<div class="d-flex align-items-start py-3 px-0 px-md-3" style={{'direction':'rtl','margin-top':'30px'}}>
						<img class="d-none d-md-block" src={sett} alt="" />
						<div class="ms-md-3 w-100" style={{'direction':'rtl'}}>
							<div class="d-flex align-items-center justify-content-between w-100">
								<div class="d-flex align-items-center">
									<img class="d-block d-md-none" src={sett} alt="" />
									<h2 class="ms-2 ms-md-0 color1 mb-0">{translate!=null?translate[38].value:'Reading Preferences'} </h2>
								</div>
								<div>
									<button aria-pressed="false" type="button"
											class="btn-close d-block d-md-none"
											data-bs-dismiss="modal"
											aria-labelledby="Reading Preferences" onClick={() => ClosePopUp()}></button>
								</div>
							</div>
							<div class="row mt-5 mb-4">
								<div class="col-12 col-md-6">
									<div class="row mt-4" style={{'width':'55%'}}>
										<div href="#"  class="f20  col-md-4" aria-owns="chooseRead" role="presentation" id="chooseRead">
                    {translate!=null?translate[39].value:'Reading options:'}
										</div>
										<div class="col-9 col-md-12">
											<div class="btn-group w-100"
												 role="group"
												 aria-labelledby="chooseRead">
												<button aria-pressed="false" type="button" id="auto" class="btn auto"  onClick={() => ChangeRead('auto')}>
                        {translate!=null?translate[46].value:'Automatic'}
												</button>
												<button aria-pressed="false" type="button" id="manual" class="btn manual" onClick={() => ChangeRead('manual')}>
                        {translate!=null?translate[47].value:'Manual'} 
												</button>
												<button aria-pressed="false" type="button" id="timing" class="btn bg timing" onClick={() => ChangeRead('timing')}>
                        {translate!=null?translate[48].value:'Timed'}  
												</button>
												<button aria-pressed="false" type="button" id="continuous" class="btn bg continuous" onClick={() => ChangeRead('continuous')}>
                        {translate!=null?translate[49].value:'Continuous'}   
												</button>
											</div>
											<p class="mt-2 color2 fw-light px-3 readtext">

											</p>
										</div>
									</div>
									<div class="line"></div>
									<div class="timingline row my-3 align-items-center" style={{display:showTiming}}>
										<div href="#"  class="f20 col-3 col-md-4" aria-owns="timeRead" role="presentation" id="timeRead">
                    {translate!=null?translate[44].value:'Timing:'}
										</div>
										<div class="col-9 col-md-8" >
											<div class="d-flex align-items-start" role="group" aria-labelledby="timeRead">
											
												<input class="timing_inp mx-2" aria-labelledby="Text changes every"
													   type="text" value={timing} onChange={(e)=>setTiming(e.target.value)}
													   name=""
													   id="" />
												<p class="mb-0 fw-light"> {translate!=null?translate[45].value:'seconds'}</p>
											</div>
										</div>
									</div>
									<div class="line"></div>
									<div style={{display:showecho}} class="echoline row my-3 align-items-center">
										<div href="#"  class="f20 col-3 col-md-4" aria-owns="chooseEcho" role="presentation" id="chooseEcho">
                    {translate!=null?translate[41].value:'Echo:'}
										</div>
										<div class="col-3 col-md-4">
											<div class="btn-group"
												 role="group"
												 aria-labelledby="chooseEcho">
												<button aria-pressed="false" type="button" id="echo" class="btn px-3 py-1 echo" onClick={() => ChangeEcho('echo')}>
                        {translate!=null?translate[97].value:'On'}
												</button>
												<button aria-pressed="false" type="button" id="noecho" class="btn px-3 py-1 noecho" onClick={() => ChangeEcho('noecho')}>
                        {translate!=null?translate[98].value:'Off'}
												</button>
											</div>
										</div>
										<div style={{'text-align':'right','direction':'rtl'}}> {translate!=null?translate[42].value:'Listen to yourself reading (please use earphones and a microphone'}</div>
									</div>
								</div>
								<div class="col-12 col-md-6" style={{'width':'100% !important'}}>
									<div href="#"   class="f20 col-3 col-md-4" aria-owns="chooseMarker" role="presentation" id="chooseMarker">
                  {translate!=null?translate[40].value:'Markup'}
									</div>
									<div class="d-flex justify-content-between" role="group" aria-labelledby="chooseMarker">
										<button aria-pressed="false" class="w-100 d-flex flex-column justify-content-between align-items-center border border-1 py-3 yelloww markupbtn" id="yellow" onClick={() => ChangeMarker('yellow')}>
											<p class="mb-0">{translate!=null?translate[93].value:'Yellow'}</p>
											<div class="yellow  my-2"></div>
											<img src={mar} class="yellowbtn" alt="" />
										</button>
										<button aria-pressed="false" class="w-100 d-flex flex-column justify-content-between align-items-center border border-1 py-3 greyy markupbtn" id="grey" onClick={() => ChangeMarker('grey')}>
											<p class="mb-0">{translate!=null?translate[94].value:'Gray'}</p>
											<div class="grey my-2"></div>
											<img src={mar} class="greybtn" alt="" />
										</button>
										<button aria-pressed="false" class="w-100 d-flex flex-column justify-content-between align-items-center border border-1 py-3 underlinee markupbtn" id="underline" onClick={() => ChangeMarker('underline')}>
											<p class="mb-0">{translate!=null?translate[95].value:'Underline'}</p>
											<div class="underline my-2"></div>
											<h3 class="text-decoration-underline f600">U</h3>
										</button>
										<button aria-pressed="false" class="w-100 d-flex flex-column justify-content-between align-items-center border border-1 py-3 none markupbtn" id="none" onClick={() => ChangeMarker('none')}>
											<p class="mb-0">{translate!=null?translate[96].value:'None'}</p>
											<div></div>
											<img src={marno} alt="" />
										</button>
									</div>
								</div>
								<div class="col-12 mt-4 mt-md-0">
									<div class="d-flex justify-content-end">
										<button aria-pressed="false" class="bg_color1 text-white border-0 px-3 py-1 rounded-2" onClick={() => SaveSettings()}>{translate!=null?translate[43].value:'Save changes'} </button>
									</div>
									<div  id="changestxt"> {settingSaved}</div>
								</div>
							</div>
						</div>
						<button aria-pressed="false" type="button"  onClick={() => ClosePopUp()}
								class="btn-close d-none d-md-block" 
								data-bs-dismiss="modal" aria-label="close"
								aria-labelledby="Close"></button>
					</div>
				</div>
			</div>
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
        <div class="menu" style={{'margin-top':'17px'}}>
            <div class="library">
                    <p onClick={() => showBooks()}>ספריה</p>
                    
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

    <div  class="sidebar_container px-2">
      <div
        class="container-fluid d-flex align-items-center h-100 justify-content-between" style={{'direction':'rtl'}}
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
                  href="reader.html"
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
                  href="reader.en.html"
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

    <div class="page_container">
      <div class="body_container">
        <div class="page_inner body_part py-4 px-4">
          <div class="container-fluid position-relative">
            <div class="back_btn d-none d-md-block">
              <img style={{'width': '50px','margin-left': '33%'}} src={back1} alt="" onClick={() => Back()}/>
            </div>

            <div class="text-center mb-4">
              <p class="f22 mb-0 fw400 color1">{chapterNameEng}</p>
            </div>



            <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide px-1 px-md-4 py-3">
                  <div
                    class="slide_box d-flex justify-content-center align-items-center position-relative"
                  >
                    <h1 class="text-center fw600" id="text" style={{fontSize: fontsize}}>{text}</h1>

                    <div
                      class="w-100 position-absolute bottom-0 d-flex justify-content-between py-2 px-3" 
                    >
                      <div>
                        <img src={maga2} alt="" onClick={() => decreaseText()}/>
                        <img onClick={() => increaseText()}
                          class="ms-2"
                          src={maga1}
                          alt=""
                        />
                      </div>
                      <div class="center_part position-absolute">
                        <img
                          class="swiper-button-prev" style={{'width':'12%'}}
                          src={re}
                          alt="" onClick={() => back()}
                        />
                        <img
                          class="ms-3"
                          src={twoLeft}
                          alt="" onClick={() => stop()}
                        />
                        <img
                          class="mx-2 playbutton" style={{display:showplay}} onClick={() => playnow()}
                          src={playbtn}
                          alt=""
                        />
                        <img
                          class="mx-2 playbutton" style={{display:showpause}} onClick={() => pausenow()}
                          src={pausebtn}
                          alt=""
                        />
                        <img
                          class="swiper-button-next" style={{'width':'12%'}}
                          src={fwd}
                          alt=""  onClick={() => next()}
                        />
                      </div>
                      <div class="d-flex gap-3 align-items-center">
                        <button
                          class="border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal" onClick={() => OpenPopUp()}
                        >
                          <img src={set} alt="" />
                        </button>

                        <select class="zoom d-none d-md-block" onChange={(e)=>setSpeed(e.target.value)}>
                          <option value="6">1.25x
                          <img
                            class="ms-2"
                            src={downArrow}
                            alt=""
                          /></option>
                          <option value="5">1.125x
                          <img
                            class="ms-2"
                            src={downArrow}
                            alt=""
                          /></option>
                          <option value="0" selected>1x
                          <img
                            class="ms-2"
                            src={downArrow}
                            alt=""
                          /></option>
                          <option value="1">0.875x
                          <img
                            class="ms-2"
                            src={downArrow}
                            alt=""
                          /></option>
                          <option value="2">0.75x
                          <img
                            class="ms-2"
                            src={downArrow}
                            alt=""
                          /></option>
                          <option value="3">0.625x
                          <img
                            class="ms-2"
                            src={downArrow}
                            alt=""
                          /></option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <audio  controls id="carteSoudCtrl" aria-hidden="true">
		<source src="/Files/play.mp3" type="audio/mpeg"></source>
		Your browser does not support the audio element.
	</audio>
    <audio  id="audio" controls autoplay aria-hidden="true"></audio>

  
    </>
    )

}