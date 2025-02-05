import Link from "next/link";
import ReturnToGeorgia from "./ReturnToGeorgia"; // ✅ "დამაბრუნე" იმპორტი
import { FaFacebook, FaInstagram, FaTiktok, FaTrophy, FaGamepad, FaGift } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 shadow-lg fixed top-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center">

        {/* 🔙 "დამაბრუნე 🇬🇪" ღილაკი */}
        <ReturnToGeorgia />

        {/* მენიუს ბმულები */}
        <ul className="flex space-x-4 text-lg font-semibold text-white justify-center w-full">
          <li className="nav-item"><Link href="/winners"><FaTrophy className="inline-block mr-2" /> გამარჯვებულები</Link></li>
          <li className="nav-item"><Link href="/play"><FaGamepad className="inline-block mr-2" /> დობი</Link></li>
          <li className="nav-item"><Link href="/donate"><FaGift className="inline-block mr-2" /> დონაცია</Link></li>
          <li className="nav-item"><Link href="/contact">📞 კონტაქტი</Link></li>
          <li className="nav-item"><Link href="/rules">📜 წესები</Link></li>
        </ul>

        {/* 🔗 სოციალური ბმულები */}
        <div className="flex space-x-6 text-white text-3xl">
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

      {/* CSS სტილები */}
      <style jsx>{`
        .nav-item {
          transition: transform 0.2s ease-in-out, color 0.2s;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
        }
        .nav-item:hover {
          transform: scale(1.1);
          color: #ffea00;
        }
        .social-icon {
          transition: transform 0.2s ease-in-out, color 0.2s;
        }
        .social-icon:hover {
          transform: scale(1.3);
          color: #ffea00;
        }
      `}</style>
    </nav>
  );
}
