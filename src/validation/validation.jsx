
import { useState } from "react"

export function Exform(){
    const [name,setName]=useState()
    const [errorName,setErrorName]=useState()
    const [pwd,setPwd]=useState()
    const [errorPwd,setErrorPwd]=useState()
    const [email,setEmail]=useState()
    const [errorEmail,setrrorEmail]=useState()

   function Validatform(){

let valid =true;
if(name.length>6){
    setErrorName("must be 6 leters")

}else{
    setErrorName("")
}

if(pwd.length>5){
    setErrorPwd("must 5 letters")

}else{
    setErrorPwd("")
}


const emailPattern = /^[A-Za-z0-9]{1,14}@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
if(!email.match(emailPattern())){

    setEmail("must required")
}else{
    setEmail("")
}

return valid
    

   }
   function handleSubmit(e){
    e.preventDeafult()


    if(Validatform){
        alert("login successfully")

    }
    errorName("")


    errorEmail("")
    errorPwd("")
    console.log({
       name,
       email,
       pwd,

        
    })

   }
    
   
    return(
        
        

            <form action="" onSubmit={handleSubmit}>


                <div>
               <h1>form validation</h1>
                   Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br />
                   {errorName &&<p style={{color:"red"}}>{errorName}</p> }

                   pwd: <input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)}/><br />
                    {errorEmail&& <p style={{color:"red"}}>{errorPwd}</p> }

                  email:  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
                  {errorPwd && <p style={{color:"red"}}>{errorPwd}</p> }
<button type="submit">submit</button>
                </div>
            </form>

    )

}