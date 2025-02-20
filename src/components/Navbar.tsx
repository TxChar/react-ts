// src/components/Navbar.tsx
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold">
          E-Shop
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-500">
            หน้าแรก
          </a>
          <a href="#" className="hover:text-gray-500">
            คอมพิวเตอร์เซต
          </a>
          <a href="#" className="hover:text-gray-500">
            จัดสเปกคอม
          </a>
          <a href="#" className="hover:text-gray-500">
            บทความ
          </a>
          <a href="#" className="hover:text-gray-500">
            ติดต่อเรา
          </a>
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
          <a href="#" className="block py-1 hover:text-gray-500">
            Home
          </a>
          <a href="#" className="block py-1 hover:text-gray-500">
            หน้าแรก
          </a>
          <a href="#" className="block py-1 hover:text-gray-500">
            คอมพิวเตอร์เซต
          </a>
          <a href="#" className="block py-1 hover:text-gray-500">
            จัดสเปกคอม
          </a>
          <a href="#" className="block py-1 hover:text-gray-500">
            บทความ
          </a>
          <a href="#" className="block py-1 hover:text-gray-500">
            ติดต่อเรา
          </a>
          <a href="#" className="block py-1 hover:text-gray-500">
            เกี่ยวกับเรา
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
