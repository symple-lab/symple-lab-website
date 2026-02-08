/* 
  Neo-Brutalist Navigation: Fixed vertical sidebar with sharp geometric design
  - Charcoal background with cobalt blue accents
  - Thick borders and hard shadows
  - Bold typography with Space Grotesk
*/

import { Link, useLocation } from "wouter";
import { Home, FlaskConical, FileText, Users } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/research", label: "Research", icon: FlaskConical },
    { path: "/publications", label: "Publications", icon: FileText },
    { path: "/team", label: "Team", icon: Users },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-20 lg:w-64 bg-[#2C2C2C] border-r-4 border-[#0047AB] z-50 flex flex-col">
      {/* Logo Section */}
      <Link href="/">
        <div className="p-4 lg:p-6 border-b-4 border-[#0047AB] cursor-pointer hover:bg-[#0047AB] transition-colors duration-200">
          <div className="text-white font-bold text-xl lg:text-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="hidden lg:block">SYMPLE</span>
            <span className="block lg:hidden text-center">S</span>
          </div>
          <div className="text-[#C0C0C0] text-xs lg:text-sm hidden lg:block" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Laboratory
          </div>
        </div>
      </Link>

      {/* Navigation Items */}
      <div className="flex-1 py-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          
          return (
            <Link key={item.path} href={item.path}>
              <div
                className={`
                  mx-2 lg:mx-4 mb-4 p-3 lg:p-4 border-4 cursor-pointer
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-[#0047AB] border-[#0047AB] text-white hard-shadow-sm' 
                    : 'bg-transparent border-[#C0C0C0] text-[#C0C0C0] hover:bg-[#0047AB] hover:border-[#0047AB] hover:text-white'
                  }
                `}
              >
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  <span className="hidden lg:block font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.label}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t-4 border-[#0047AB] text-[#C0C0C0] text-xs text-center hidden lg:block">
        © 2026 SYMPLE Lab
      </div>
    </nav>
  );
}
