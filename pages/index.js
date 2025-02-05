import WinnerCard from "../components/WinnerCard";
import Image from "next/image";
import MoneyRain from "../components/MoneyRain";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center relative overflow-hidden">
      {/* ფულის წვიმა */}
      <MoneyRain />
      {/* მთავარი ლოგო */}
      <div className="transform -translate-y-14 border-yellow-400 rounded-lg mt-28">
        <Image
          src="/logo.png"
          alt="Main Giveaway"
          width={1000}
          height={900}
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* მთავარი სათაური */}
      <h1 className="text-4xl font-bold mt-2 relative z-10">
        "არასდროს გაჩერდე, სანამ იღბალი არ შეგნიშნავს!"
      </h1>
      {/* CTA ღილაკი */}
      <a
        href="https://www.youtube.com/@luckyfromgeorgia"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-lg shadow-lg transition relative z-10"
      >
        შეუერთდი გათამაშებას!
      </a>
      {/* გამარჯვებულების სექცია */}
      <div className="bg-gray-800 py-10 text-center mt-14">
        <h2 className="text-3xl text-white mb-6">🏆 ბოლო გამარჯვებულები</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          <WinnerCard name="თემო კახიძე" amount="150" date="2 თებერვალი 2025" />
          <WinnerCard name="ნიკა მარგველაშვილი" amount="150" date="25 იანვარი 2025" />
          <WinnerCard name="სოფო ბერიძე" amount="150" date="18 იანვარი 2025" />
        </div>
      </div>
    </div>
  );
}
