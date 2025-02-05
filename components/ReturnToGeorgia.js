import Link from "next/link";
import { useState } from "react";

export default function ReturnToGeorgia() {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 500); // ბრუნვის დასრულების შემდეგ ისევ ჩვეულებრივ გახდეს
  };

  return (
    <Link href="/">
      <button
        onClick={handleClick}
        className={`text-white text-lg font-bold transition-transform duration-500 ${
          isRotating ? "rotate-[360deg]" : ""
        }`}
      >
        🇬🇪 დამაბრუნე
      </button>
    </Link>
  );
}
