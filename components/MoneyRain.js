import { useEffect, useState } from "react";

export default function MoneyRain() {
  const [money, setMoney] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0); // 💰 ჯამური თანხა
  const [playerPosition, setPlayerPosition] = useState(50); // 🏃‍♂️ მოთამაშის X პოზიცია
  const [isDancing, setIsDancing] = useState(false); // 🕺 დობი ცეკვავს თუ არა?
  const playerSpeed = 8; // 🔥 სწრაფი მოძრაობა!
  const moneyTypes = [
    { src: "/100lari.png", value: 100 },
    { src: "/50lari.png", value: 50 },
    { src: "/20lari.png", value: 100 },
    { src: "/200lari.png", value: 50 },
  ];

  useEffect(() => {
    const createMoney = () => {
      const newMoney = {
        id: Math.random(),
        left: Math.random() * 100 + "vw",
        animationDuration: Math.random() * 4 + 5 + "s",
        ...moneyTypes[Math.floor(Math.random() * moneyTypes.length)],
      };

      setMoney((prev) => [...prev, newMoney]);

      // ✅ დაელოდოს დაცემას და შემდეგ შეამოწმოს მოთამაშის მდებარეობა
      setTimeout(() => {
        setMoney((prev) => prev.filter((item) => item.id !== newMoney.id));
        if (Math.abs(parseFloat(newMoney.left) - playerPosition) < 10) {
          collectMoney(newMoney); // ✅ მოთამაშემ აიღო ფული!
        }
      }, (parseFloat(newMoney.animationDuration) * 2000));
    };

    const interval = setInterval(createMoney, 700);
    return () => clearInterval(interval);
  }, [playerPosition]);

  // 🎮 მოთამაშის მოძრაობა (მარცხნივ და მარჯვნივ)
  const handleKeyPress = (event) => {
    if (event.key === "ArrowLeft") {
      setPlayerPosition((prev) => Math.max(prev - playerSpeed, 0)); // მარცხნივ სწრაფი
    } else if (event.key === "ArrowRight") {
      setPlayerPosition((prev) => Math.min(prev + playerSpeed, 100)); // მარჯვნივ სწრაფი
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // ✅ მოთამაშის მიერ ფულის აღება (ჩავამატოთ საფულეში)
  const collectMoney = (moneyItem) => {
    setTotalAmount((prev) => {
      const newTotal = prev + moneyItem.value;

      // 🔄 როცა 1000₾-მდე ავა, დობი ორჯერ იცეკვებს!
      if (newTotal >= 2000) {
        setIsDancing(true);

        // 🕺 1.5 წამი ცეკვა
        setTimeout(() => {
          setIsDancing(false); // შეჩერება
          
          // 🕺 1 წამში კვლავ ცეკვა
          setTimeout(() => {
            setIsDancing(true);

            // 🕺 1.5 წამში ისევ შეჩერდება
            setTimeout(() => {
              setIsDancing(false);
              setTotalAmount(0); // 🔄 საფულე ნულდება
            }, 1500);
            
          }, 2000);
          
        }, 1500);
      }

      return newTotal;
    });
    playSound(); // 🎵 ფულის აღების ხმა
  };

  // 🎵 ხმა ფულის აღებისას
  const playSound = () => {
    const audio = new Audio("/coin.mp3"); // დაამატე `public/coin.mp3`
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* 🌧️ ფულის წვიმა */}
      {money.map((item) => (
        <img
          key={item.id}
          src={item.src}
          alt="Money"
          className="absolute w-16 h-10"
          style={{
            left: item.left,
            animation: `fall ${item.animationDuration} linear forwards`,
          }}
        />
      ))}

      {/* 🏃‍♂️ მოთამაშე ან ცეკვავს */}
      <img
        src="/player.png"
        alt="Player"
        className={`absolute w-30 h-56 transition-all duration-500 ${
          isDancing ? "dance" : ""
        }`}
        style={{
          left: isDancing ? "50%" : `${playerPosition}vw`,
          bottom: isDancing ? "30%" : "-20px",
          transform: isDancing ? "translateX(-50%) scale(1.2)" : "none",
        }}
      />

      {/* 👜 საფულე + თანხა */}
      <div className="absolute bottom-10 left-10 flex items-center bg-green-800 text-black p-4 rounded-lg shadow-lg">
        <img src="/wallet.png" alt="Wallet" className="w-16 h-14 mr-2" />
        <p className="text-xl font-bold">{totalAmount}₾</p>
      </div>

      <style jsx>{`
        @keyframes fall {
          from {
            transform: translateY(-10%);
            opacity: 1;
          }
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        /* 🕺 დობის ცეკვის ანიმაცია */
        @keyframes danceAnimation {
          0% { transform: translateX(-50%) scale(1.2) rotate(0deg); }
          25% { transform: translateX(-50%) scale(1.2) rotate(10deg); }
          50% { transform: translateX(-50%) scale(1.2) rotate(-10deg); }
          75% { transform: translateX(-50%) scale(1.2) rotate(10deg); }
          100% { transform: translateX(-50%) scale(1.2) rotate(0deg); }
        }

        .dance {
          animation: danceAnimation 0.5s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}
