import React from 'react'
import myImage from '../images/logo-06.png';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    /* for the pathname route */
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header>
                <div className="flex max-w-5xl justify-between mx-auto items-center">
                    <img src={myImage} alt="logo" className="h-10 cursor-pointer" onClick={() => navigate("/")} />
                    <div>
                        <ul className='flex space-x-8 '>
                            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] 
                            border-transparent ${pathMatchRoute("/") && "text-black border-b-[#00AD2F]"}`}
                                onClick={() => navigate("/")}
                            >Home</li>
                            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] 
                            border-transparent ${pathMatchRoute("/Job-List") && "text-black border-b-[#00AD2F] "}`} onClick={() => navigate("/Job-List")}>Job List</li>
                            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] 
                            border-transparent ${pathMatchRoute("/Companies") && "text-black border-b-[#00AD2F] "}`} onClick={() => navigate("/Companies")}>Companies</li>
                            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] 
                            border-transparent ${pathMatchRoute("/Post-Job") && "text-black border-b-[#00AD2F]"}`} onClick={() => navigate("/Post-Job")}>Post Jobs</li>
                            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] 
                            border-transparent ${pathMatchRoute("/Create-Resume") && "text-black border-b-[#00AD2F]"}`} onClick={() => navigate("/Create-Resume")}>Create Resume</li>
                            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] 
                            border-transparent ${pathMatchRoute("/Login-SignUp") && "text-black border-b-[#00AD2F]"}`} onClick={() => navigate("/Login-SignUp")}>Login/Sign Up</li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
