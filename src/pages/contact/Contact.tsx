// src/pages/Contact.tsx
const Contact = () => {
    return (
      <div className="container mx-auto max-w-screen-xl p-4 mt-[64px]">
        <h1 className="text-3xl font-bold mb-4">ติดต่อเรา</h1>
        <p>หากคุณมีคำถามหรือต้องการติดต่อเรา กรุณากรอกแบบฟอร์มหรือติดต่อผ่านช่องทางด้านล่าง:</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">ข้อมูลการติดต่อ:</h2>
          <ul className="list-disc ml-6">
            <li>📞 โทร: 012-345-6789</li>
            <li>📧 อีเมล: info@eshop.com</li>
            <li>🏢 ที่อยู่: 123 ถนนสายหลัก, กรุงเทพฯ 10200</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Contact;
