import Nav from "../../../shared/component/nav";
import { useState } from "react";

function Contact(){
  const [value , setValue]= useState(" ");
   const [value2 , setValue2]= useState(" ");
    const [value3 , setValue3]= useState(" ");
  const [v1 ,setv1]=useState(" ");
  const [v2 ,setv2]=useState(" ");
  const [v3 ,setv3]=useState(" ");
  function handleClick() {
    setv1(value)
    setv2(value2)
    setv3(value3)
 }


    return(
        <>
        <Nav />
         <div>
            <p>name</p>
            <div className="flex gap-4">
            <input className="border-2" onChange={(e)=> setValue(e.target.value)}/>
            <input className="border-2" onChange={(e)=> setValue2(e.target.value2)}/>
            <input className="border-2" onChange={(e)=> setValue3(e.target.value3)}/>
            </div>
            <button className="border-2"onClick={()=>{handleClick()}}>button</button>
            <p>{v1}</p>
            <p>{v2}</p>
            <p>{v3}</p>

            
            </div>
 </>

    )
}

export default Contact;