//import ThemeSelector from "../components/ThemeSelector";
import { Settings, Search } from "lucide-react";  

function Navbar() {
  return (
    <div className="navbar bg-red-400">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-red-300 z-[1] mt-3 w-auto p-2 shadow">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
            </ul>
            </div>

            <a className="btn btn-ghost text-xl">Ptch-Blog</a>
        </div>
        <div className="navbar-center">
            
        </div>
        <div className="navbar-end">

        <Search />
        <pre> </pre>
        <Settings />

        </div>
        </div>
  )
}

export default Navbar