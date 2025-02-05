import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// ✅ Confetti ფეიერვერკი (Dynamic Import)
const Confetti = dynamic(() => import("canvas-confetti"), { ssr: false });

export default function StarWinner({ winner }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (winner) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [winner]);

  return (
    <div className="flex flex-col items-center justify-center bg-yellow-500 text-black p-6 rounded-xl shadow-lg w-full md:w-3/4 animate-fade-in">
      {/* 🎇 ფეიერვერკი */}
      {showConfetti && <Confetti />}

      {/* 🌟 კვირის ვარსკვლავი */}
      <h2 className="text-3xl font-bold mb-4">⭐ კვირის ვარსკვლავი ⭐</h2>

      {/* 📸 გამარჯვებულის სურათი */}
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg animate-bounce">
        <Image src={winner.image} alt={winner.name} layout="fill" objectFit="cover" />
      </div>

      {/* 🎥 გამარჯვებულის ვიდეო */}
      <div className="mt-4 w-64 h-36 overflow-hidden rounded-lg border-2 border-gray-300 shadow-md">
        <video autoPlay loop muted className="w-full h-full">
          <source src={winner.video} type="video/mp4" />
          თქვენი ბრაუზერი არ უჭერს მხარს ვიდეოს ფორმატს.
        </video>
      </div>

      {/* 🏆 გამარჯვებულის სახელი */}
      <h3 className="text-2xl font-semibold mt-4">{winner.name}</h3>
      <p className="text-lg text-gray-700">✨ გილოცავთ! ✨</p>
    </div>
  );
}
