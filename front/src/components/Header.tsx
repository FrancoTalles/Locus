import { Button } from "@/components/ui/button"; 
import { Link, useLocation } from "react-router-dom"; 

import logoHeader from "../assets/logo.png";

function Header() {
  const location = useLocation(); 
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-900 text-white shadow-lg">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center space-x-3">
          <img 
            src={logoHeader} 
            alt="Locus Logo" 
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-semibold tracking-wide text-white">
            Locus
          </span>
        </div>

        <nav className="flex items-center space-x-2">
          
          <Link to="/login">
            <Button 
              variant="ghost" 
              className={`text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 
                ${location.pathname === "/login" 
                  ? "text-emerald-400 bg-gray-800" 
                  : ""}`
              }
            >
              Login
            </Button>
          </Link>
          
          {/* Link: Feed */}
          <Link to="/feed">
            <Button 
              variant="ghost" 
              className={`text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200
                ${location.pathname === "/feed" 
                  ? "text-emerald-400 bg-gray-800"
                  : ""}`
              }
            >
              Feed
            </Button>
          </Link>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;