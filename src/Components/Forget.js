import React, { useContext, useState,useEffect }  from "react";
import {useNavigate } from 'react-router-dom'


export default function Forget(){

    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    
    const getSearchParams=(k)=> {
        var p = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v })
        return k ? p[k] : p;
    }


    const update =()=>{

        const params =
    {
        'Email': getSearchParams('guid'),
        'Password': password,

    }


        if(password!='' && password.length>8)
        {
        fetch('https://api.readupp.com/Login/UpdatePass',{
            //    fetch('https://localhost:44318/Login/PurchasesSucceed',{
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(params)
                })
                .then(response => response.json())
                .then(data =>
                {
                    navigate('/')
                })
                .catch(() => {
                });
        }
        else
        {

        }
    }


    return( <>
         <div class="register_container">
        <div class="register_inner_container">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-11 col-md-12 mx-auto">
                        <div class="
									w-100
									d-flex
									flex-column
									align-items-center
									justify-content-center
									rtl
								">
                          

                          
                            <input className="w-100" type="password" name placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            

                         
                               
                                <div class="mt-2 mt-md-0">
                                    <button onClick={update}
                                            class="rounded-3 bg_color1 text-white border-0 px-4 py-1">
                                        Update
                                    </button>
                                </div>
                            </div>
                           


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}