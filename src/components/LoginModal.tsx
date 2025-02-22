// src/components/LoginModal.tsx
import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate, Link} from "react-router-dom";
// import RegisterPage from "./pages/RegisterPage";

Modal.setAppElement("#root");

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successModal, setSuccessModal] = useState(false); // สำหรับ Modal สำเร็จ
  const navigate = useNavigate();

  // เมื่อกดปุ่มเข้าสู่ระบบ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ตรวจสอบอีเมลและรหัสผ่าน (ตัวอย่าง)
    if (email === "test@example.com" && password === "123456") {
      setSuccessModal(true); // เปิด Modal สำเร็จ
    } else {
      alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  // เมื่อกดปุ่ม OK ใน Modal สำเร็จ
  const handleSuccessOK = () => {
    setSuccessModal(false); // ปิด Modal สำเร็จ
    onClose(); // ปิด Modal หลัก
    navigate("/"); // ไปหน้าหลัก
  };

  return (
    <>
      {/* Modal สำหรับล็อกอิน */}
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
          {/* ปุ่มปิด Modal */}
          <button
            className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            ✖
          </button>

          {/* หัวข้อ */}
          <h2 className="text-2xl font-bold mb-6 text-center">เข้าสู่ระบบ</h2>

          {/* ฟอร์มล็อกอิน */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">อีเมล</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">รหัสผ่าน</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              เข้าสู่ระบบ
            </button>
          </form>

          {/* ลิงก์เพิ่มเติม */}
          <div className="mt-4 text-center text-sm">
            ยังไม่มีบัญชี?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:underline"
              onClick={onClose}  // <-- เพิ่มเพื่อปิด Modal
            >
              สมัครสมาชิก
            </Link>
          </div>
        </div>
      </Modal>

      {/* Modal เข้าสู่ระบบสำเร็จ */}
      <Modal
        isOpen={successModal}
        onRequestClose={handleSuccessOK}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">เข้าสู่ระบบสำเร็จ!</h2>
          <p className="mb-6">คุณได้เข้าสู่ระบบเรียบร้อยแล้ว</p>
          <button
            onClick={handleSuccessOK}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
          >
            OK
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
