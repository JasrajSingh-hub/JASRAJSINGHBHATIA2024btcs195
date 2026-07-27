import Nav from "../../../shared/component/nav";
import { Link } from "react-router-dom";
import data from "../../../data,js";
import a from "../../../assets/hero.png"

function About(){
    return(
        <>
           <Nav />
           <div className="flex justify-between items-center p-70 gap-70">
            <div className="flex flex-col gap-10">
                <h1 className="text-7xl">
                    Welcome
                 </h1>
                 <p className="text-4xl">Hi my name is {data.name} </p>
                 <p>{data.fullBio}</p>
            </div>
            <div>
                <img src={a} alt="" />
            </div>
        </div>
        </>
    )
}

export default About;