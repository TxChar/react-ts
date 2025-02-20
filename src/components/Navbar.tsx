// src/components/Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md h-16">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          E-Shop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-500">
            หน้าแรก
          </Link>
          <a href="#" className="hover:text-gray-500">
            คอมพิวเตอร์เซต
          </a>
          <a href="#" className="hover:text-gray-500">
            จัดสเปกคอม
          </a>
          <a href="#" className="hover:text-gray-500">
            บทความ
          </a>
          <Link to="/contact" className="hover:text-gray-500">
            ติดต่อเรา
          </Link>
          <a href="#" className="hover:text-gray-500">
            เกี่ยวกับเรา
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 p-2">
          <Link to="/" className="block py-1 hover:text-gray-500">
            หน้าแรก
          </Link>
          <a href="#" className="block py-1 hover:text-gray-500">
            คอมพิวเตอร์เซต
          </a>
          <a href="#" className="block py-1 hover:text-gray-500">
            จัดสเปกคอม
          </a>
          <a href="#" className="block py-1 hover:text-gray-500">
            บทความ
          </a>
          <Link to="/contact" className="block py-1 hover:text-gray-500">
            ติดต่อเรา
          </Link>
          <a href="#" className="block py-1 hover:text-gray-500">
            เกี่ยวกับเรา
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// const [isVisible, setIsVisible] = useState(true);
// let lastScrollY = window.scrollY;

// const handleScroll = () => {
//   if (window.scrollY > lastScrollY) {
//     setIsVisible(false); // Scroll ลง -> ซ่อน Navbar
//   } else {
//     setIsVisible(true); // Scroll ขึ้น -> แสดง Navbar
//   }
//   lastScrollY = window.scrollY;
// };

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);