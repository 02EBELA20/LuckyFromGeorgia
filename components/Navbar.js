import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTrophy, FaGamepad, FaGift } from "react-icons/fa";

export default function Navbar() {
  const [isRotating, setIsRotating] = useState(false);

  // 🎛 **ბერკეტები ზომების დასარეგულირებლად**
  const flagSize = { width: 100, height: 50 }; // 🇬🇪 **დროშის ზომა**
  const textSize = "text-sm text-white"; // 🔤 **ტექსტის ზომა**
  const navPadding = "p-6"; // 📏 **ჰედერის სიმაღლე**

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      window.location.href = "/"; // ✅ დაუყოვნებლივ გადამისამართება
    }, 200); // 0.5 წამი
  };

  return (
    <nav className={`bg-gradient-to-r from-blue-700 ${navPadding} shadow-lg fixed top-0 w-full z-50`}>
      <div className="container mx-auto flex justify-between items-center">

        {/* 🇬🇪 საქართველოს დროშა ბექგრაუნდად */}
        <div
          className={`flex items-center justify-center px-4 py-2 cursor-pointer transition-transform duration-500 ${
            isRotating ? "rotate-animation" : ""
          }`}
          style={{
            width: `${flagSize.width}px`,
            height: `${flagSize.height}px`,
            backgroundImage: "url('/georgia-flag.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          onClick={handleClick}
        >
          <span className={`${textSize} font-bold`}>დამაბრუნე</span>
        </div>

        {/* მენიუს ბმულები */}
        <ul className="flex space-x-4 text-base font-semibold text-white justify-center w-full">
          <li className="nav-item"><Link href="/winners"><FaTrophy className="inline-block mr-2" /> გამარჯვებულები</Link></li>
        
          <li className="nav-item"><Link href="/donate"><FaGift className="inline-block mr-2" /> დონაცია</Link></li>
          <li className="nav-item"><Link href="/contact">📞 კონტაქტი</Link></li>
          <li className="nav-item"><Link href="/rules">📜 წესები</Link></li>
          <li className="nav-item"><Link href="/play"><FaGamepad className="inline-block mr-2" /> დობი</Link></li>
        </ul>

        {/* სოციალური ბმულები */}
        <div className="flex space-x-6 text-white text-2xl">
          <a href="https://www.facebook.com/profile.php?id=61573014742100" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/luckyfromgeorgia/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@lucky_from_georgia" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* ✅ CSS ანიმაცია */}
      <style jsx>{`
        .rotate-animation {
          animation: spinText 0.5s linear;
        }
        @keyframes spinText {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </nav>
  );
}
