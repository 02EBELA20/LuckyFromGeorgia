import Image from "next/image";
import { useEffect } from "react";

export default function VIPWinner() {
  useEffect(() => {
    startConfetti();
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="relative flex flex-col items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg shadow-xl border-4 border-yellow-700"
        style={{ width: "500px", height: "380px" }} // 📌 **აქ შევამცირე ზომა!**
      >
        {/* 🏆 VIP ბანერი */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-red-00 text-white text-lg font-bold rounded-b-lg shadow-lg">
          🏆 კვირის გამარჯვებული!
        </div>

        {/* 🎆 ფეიერვერკის ეფექტი */}
        <canvas id="confettiCanvas" className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>

        {/* 🏅 გამარჯვებულის სურათი */}
        <div className="relative w-32 h-32 border-4 border-yellow-700 rounded-full overflow-hidden shadow-lg mt-8">
          <Image
            src="/winners/current-winner.jpg"
            alt="VIP Winner"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        {/* 🏆 გამარჯვებულის სახელი */}
        <h2 className="text-2xl font-extrabold mt-4 text-black drop-shadow-lg">
          თემო კახიძე
        </h2>

        {/* 💰 მოგებული თანხა */}
        <p className="text-lg font-semibold mt-2 flex items-center">
          💰 <span className="ml-2 text-yellow-900">₾150</span>
        </p>

        {/* 📅 გამარჯვების თარიღი */}
        <p className="text-sm mt-2 flex items-center">
          📅 <span className="ml-2">2 თებერვალი 2025</span>
        </p>
      </div>
    </div>
  );
}

// 🎆 **📌 ფეიერვერკის ეფექტი იგივე დარჩა**
function startConfetti() {
  if (typeof document === "undefined") return;

  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  function createConfetti() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;
    let color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    for (let i = 0; i < 30; i++) {
      particles.push({ 
        x, y, 
        dx: Math.random() * 4 - 2, 
        dy: Math.random() * 4 - 2, 
        alpha: 1, color 
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.dx;
      p.y += p.dy;
      p.alpha -= 0.02;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
      if (p.alpha <= 0) particles.splice(i, 1);
    });
    if (Math.random() < 0.05) createConfetti();
    requestAnimationFrame(animate);
  }
  animate();
}
