import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p>© 2025 LuckyGeorgia - ყველა უფლება დაცულია</p>

      {/* 🔗 სოციალური ბმულები */}
      <div className="flex justify-center space-x-6 mt-4 text-3xl">
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

      <style jsx>{`
        .social-icon {
          transition: transform 0.2s ease-in-out, color 0.2s;
        }
        .social-icon:hover {
          transform: scale(1.3);
          color: #ffea00;
        }
      `}</style>
    </footer>
  );
}
