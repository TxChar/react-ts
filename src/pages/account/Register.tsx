// src/pages/RegisterPage.tsx
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    birthDate: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ตรวจสอบรหัสผ่าน
    if (formData.password !== formData.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }

    // ส่งข้อมูลไปยัง Backend (ตัวอย่าง)
    alert(`สมัครสมาชิกสำเร็จ!\nชื่อ: ${formData.firstName}\nอีเมล: ${formData.email}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">ลงทะเบียน</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ชื่อและนามสกุล */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">ชื่อ</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-red-500"
                placeholder="ชื่อ"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">นามสกุล</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-red-500"
                placeholder="นามสกุล"
                required
              />
            </div>
          </div>

          {/* เบอร์โทรและวันเกิด */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">เบอร์โทรศัพท์</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-red-500"
                placeholder="เบอร์โทรศัพท์"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">วันเกิด</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
          </div>

          {/* อีเมล */}
          <div>
            <label className="block text-sm font-medium mb-1">อีเมล</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-red-500"
              placeholder="อีเมล"
              required
            />
          </div>

          {/* รหัสผ่านและยืนยันรหัสผ่าน */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">รหัสผ่าน</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-red-500"
                placeholder="รหัสผ่าน"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ยืนยันรหัสผ่าน</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-red-500"
                placeholder="ยืนยันรหัสผ่าน"
                required
              />
            </div>
          </div>

          {/* ปุ่มสมัครสมาชิก */}
          <div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
