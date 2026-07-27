import Nav from "../../../shared/component/nav";

function Contact(){
    function App() {
  const [value , setValue]= useState(" ");
  const [v2 ,setv2]=useState(" ");
  function handleClick() {
 setv2(value); 
 }


    return(
        <>
        <Nav />
         <div>
            <input onChange={(e)=> setValue(e.target.value)}/>
            <button onClick={()=>{handleClick()}}>idk</button>
            <p>{v2}</p>
            <p>{value}</p>
            </div>
 </>

    )
}
}
export default Contact;