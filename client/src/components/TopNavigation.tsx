/* 
  Top Navigation Component
  Clean, minimal horizontal navigation bar
*/

import { Link, useLocation } from "wouter";

export default function TopNavigation() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path || location.startsWith(path + "/");
  };

  const navItems = [
    { label: "About Us", path: "/about" },
    { label: "Research", path: "/research" },
    { label: "Publications", path: "/publications" },
    { label: "People", path: "/people" },
    { label: "Chip Gallery", path: "/gallery" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer">
            SYMPLE Lab
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
