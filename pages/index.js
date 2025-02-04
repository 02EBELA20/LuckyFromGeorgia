import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WinnerCard from "../components/WinnerCard";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* მთავარი სექცია */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
        <h1 className="text-5xl font-bold mt-10">
          🎉 <span className="text-yellow-400">LuckyGeorgia</span> - დაბადებული გამარჯვებისთვის!
        </h1>
        <p className="text-xl mt-4 text-gray-300">
          მოიგე ფულადი პრიზები ყოველ კვირას! 🚀
        </p>
        <a href="/winners" className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-lg shadow-lg transition">
          შეუერთდი გათამაშებას!
        </a>
      </div>

      {/* გამარჯვებულების სექცია */}
      <div className="bg-gray-800 py-10 text-center">
        <h2 className="text-3xl text-white mb-6">🏆 ბოლო გამარჯვებულები</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <WinnerCard name="თემო კახიძე" amount="150" date="2 თებერვალი 2025" />
          <WinnerCard name="ნიკა მარგველაშვილი" amount="300" date="25 იანვარი 2025" />
          <WinnerCard name="სოფო ბერიძე" amount="450" date="18 იანვარი 2025" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
