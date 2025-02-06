import WinnerCard from "../components/WinnerCard";
import Image from "next/image";
import MoneyRain from "../components/MoneyRain";
import VIPWinner from "../components/VIPWinner"; 

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

      {/* 🏆 VIP გამარჯვებულის სექცია */}
      <div className="bg-yellow-500 text-black py-8 px-6 mt-12 rounded-lg shadow-lg w-full max-w-2xl">
        <VIPWinner />
      </div>

      {/* CTA ღილაკი */}
      <a
        href="https://www.youtube.com/@luckyfromgeorgia"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 mb-10 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-lg shadow-lg transition relative z-10"
      >
        შეუერთდი გათამაშებას!
      </a>
    </div> 
  );
}
