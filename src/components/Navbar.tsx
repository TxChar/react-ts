// src/components/Navbar.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // สำหรับเปิด/ปิด Modal
  const location = useLocation();

  // ตรวจสอบเส้นทางปัจจุบัน เพื่อไฮไลท์เมนู
  const isActive = (path: string) =>
    location.pathname === path ? "text-red-500" : "text-black";

  return (
    <nav className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md h-16 flex items-center">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center p-4">
        {/* โลโก้ */}
        <Link to="/" className="text-2xl font-bold">
          IHave-Charnom
        </Link>

        {/* เมนูสำหรับ Desktop */}
        <div className="flex items-center space-x-6">
          <Link to="/" className={`hover:text-red-500 ${isActive("/")}`}>
            หน้าแรก
          </Link>
          <Link to="/contact" className={`hover:text-red-500 ${isActive("/contact")}`}>
            ติดต่อเรา
          </Link>

          {/* ปุ่มเข้าสู่ระบบ */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => setIsOpen(true)}
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>

      {/* Modal สำหรับเข้าสู่ระบบ */}
      {isOpen && (
        <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
