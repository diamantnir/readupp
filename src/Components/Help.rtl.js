import back from '../assets/icons/back.svg'
export default function Helprtl(){

    const Back=() =>{
        window.history.go(-1)
    }


    return( <>
       <img
                                class="d-none d-lg-block back pointer" style={{'width': '50px','margin-left': '3%'}}
                                src={back} onClick={() => Back()}
                                alt="" />
                                
         <div class="register_container">
        <div class="register_inner_container">
            <div class="container-fluid">
                
                <div class="row">
                    <div class="col-11 col-md-12 mx-auto">
                        
                      
                        
                    <div>
                        
                        עזרה</div>
                   
                           


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}