import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx"; 

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  // Apply the theme to the <html> element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">MyReactApp</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        {/* Mobile dropdown menu */}
        
         {/* Theme toggle */}
         <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="ml-4 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded transition"
        >
          {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
