import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        <div className="flex justify-between p-10  bg-blue-200 items-center">
            <h1 className="text-2xl">
                Jasraj Singh Bhatia
            </h1>
            <div className="flex gap-10">
                <Link to='/about'>About</Link>
                 <Link  to='/contact'>Contact</Link>
            </div>
            <h1>
                "Full Stack Developer"
            </h1>
        </div>
        </>
    )
}
export default Nav;