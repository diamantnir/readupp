import React, { useContext, useState,useEffect }  from "react";

export default function Success(){

    useEffect(() => {
    const params =
    {
        'months': localStorage.monthreq,
        'userid': localStorage.userId,

    }

       fetch('https://api.readupp.com/Login/PurchasesSucceed',{
    //    fetch('https://localhost:44318/Login/PurchasesSucceed',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(params)
        })
        .then(response => response.json())
        .then(data =>
        {
            localStorage.exp="block";
        })
        .catch(() => {
        });
    
    
        
        
    },[])




    return( <>
        <div>Transaction succeed</div>
    </>
    )

}