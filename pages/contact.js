import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 text-white">
        <h1 className="text-3xl font-bold text-center">📞 კონტაქტი</h1>
        <p className="text-center mt-6">
          შეგვიძლია დაგეხმაროთ! დაგვიკავშირდით:
        </p>

        {/* 📌 სოციალური ბმულები */}
        <ul className="text-center mt-4 space-y-2">
          <li>▶️ <a href="https://www.facebook.com/profile.php?id=61573014742100" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Facebook</a></li>
          <li>📱 <a href="https://www.instagram.com/luckyfromgeorgia/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">Instagram</a></li>
          <li>🎥 <a href="https://www.youtube.com/@luckyfromgeorgia" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">YouTube</a></li>
        </ul>

        {/* 📍 მისამართი */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-lg mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-3">📍ჩვენი მდებარეობა</h2>
          <p className="text-lg">New York, Broadway
          </p>
        </div>

        {/* 🌍 Google Maps */}
        <div className="w-full max-w-2xl h-80 rounded-lg overflow-hidden shadow-lg mx-auto mt-6">
  <iframe
    className="w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.5851104189753!2d-73.98592521300537!3d40.75938966365768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c256598d232339%3A0xda8b85263f93969e!2sBroadway%2C%20New%20York!5e0!3m2!1sen!2sus!4v1738786830915!5m2!1sen!2sus"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>
    </div>
  );
}
