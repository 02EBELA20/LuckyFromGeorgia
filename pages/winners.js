import { useState } from "react";
import Image from "next/image";

const winners = [
  { name: "თემო კახიძე", amount: "$150", date: "2 თებერვალი 2025", img: "/winners/winner1.jpg", screenshot: "/screenshots/screen1.jpg" },
  { name: "ნიკა მარგველაშვილი", amount: "$200", date: "9 თებერვალი 2025", img: "/winners/winner2.jpg", screenshot: "/screenshots/nika.jpg" },
  { name: "სოფო ბერიძე", amount: "$300", date: "16 თებერვალი 2025", img: "/winners/winner3.jpg", screenshot: "" },
  { name: "გიორგი მაისურაძე", amount: "$500", date: "23 თებერვალი 2025", img: "/winners/winner4.jpg", screenshot: "/screenshots/giorgi.jpg" },
  { name: "სოფო ბერიძე", amount: "$300", date: "16 თებერვალი 2025", img: "/winners/winner3.jpg", screenshot: "" },
  { name: "გიორგი მაისურაძე", amount: "$500", date: "23 თებერვალი 2025", img: "/winners/winner4.jpg", screenshot: "/screenshots/giorgi.jpg" }, { name: "სოფო ბერიძე", amount: "$300", date: "16 თებერვალი 2025", img: "/winners/winner3.jpg", screenshot: "" },
  { name: "გიორგი მაისურაძე", amount: "$500", date: "23 თებერვალი 2025", img: "/winners/winner4.jpg", screenshot: "/screenshots/giorgi.jpg" },
];

const ITEMS_PER_PAGE = 24;
const MAX_PAGES = 5;

export default function WinnersPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredWinners = winners.filter(
    (winner) =>
      winner.name.toLowerCase().includes(search.toLowerCase()) ||
      winner.date.includes(search)
  );

  const totalPages = Math.min(MAX_PAGES, Math.ceil(filteredWinners.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedWinners = filteredWinners.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">🏆 გამარჯვებულთა სია</h1>

      <p className="mb-4 text-lg">
        🔢 საერთო გამარჯვებულთა რაოდენობა:{" "}
        <span className="text-yellow-400 font-bold">{winners.length}</span>
      </p>

      <input
        type="text"
        placeholder="🔍 მოძებნე გამარჯვებული..."
        className="mb-4 p-2 text-black rounded-lg shadow-md w-full max-w-lg"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📌 **თანაბარი სიგანის და სიმაღლის ცხრილი** */}
      <div className="overflow-x-auto w-full max-w-5xl">
        <table className="w-full border-collapse border border-yellow-500 bg-gray-800 shadow-lg table-fixed">
          <thead>
            <tr className="bg-yellow-500 text-black">
              <th className="border border-yellow-600 px-4 py-3 w-1/5">📸 ფოტო</th>
              <th className="border border-yellow-600 px-4 py-3 w-1/5">👤 სახელი</th>
              <th className="border border-yellow-600 px-4 py-3 w-1/5">💰 მოგებული თანხა</th>
              <th className="border border-yellow-600 px-4 py-3 w-1/5">📅 თარიღი</th>
              <th className="border border-yellow-600 px-4 py-3 w-1/5">📷 სქრინი</th>
            </tr>
          </thead>
          <tbody>
            {paginatedWinners.length > 0 ? (
              paginatedWinners.map((winner, index) => (
                <tr key={index} className="text-center hover:bg-gray-700 transition h-20">
                  <td className="border border-yellow-600 px-4 py-3 flex justify-center items-center">
                    <div className="w-16 h-16 flex justify-center items-center overflow-hidden rounded-full border-2 border-yellow-500">
                      <Image src={winner.img} alt={winner.name} width={50} height={50} className="rounded-full object-cover" />
                    </div>
                  </td>
                  <td className="border border-yellow-600 px-4 py-3">{winner.name}</td>
                  <td className="border border-yellow-600 px-4 py-3 text-yellow-400 font-semibold">{winner.amount}</td>
                  <td className="border border-yellow-600 px-4 py-3">{winner.date}</td>
                  <td className="border border-yellow-600 px-4 py-3">
                    {winner.screenshot ? (
                      <a
                        href={winner.screenshot}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      >
                        📸 სქრინი
                      </a>
                    ) : (
                      <div className="flex items-center justify-center px-3 py-1 bg-gray-500 text-white rounded-lg">
                        ❌ სქრინი არ არის
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-red-400">
                  ❌ ვერ მოიძებნა შედეგი
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 📌 გვერდებზე გადასვლის ღილაკები */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-4 py-2 rounded-lg font-bold ${
            currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } transition`}
          disabled={currentPage === 1}
        >
          ⬅️ წინა გვერდი
        </button>

        <span className="px-4 py-2 bg-gray-700 text-white rounded-lg">
          გვერდი {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className={`px-4 py-2 rounded-lg font-bold ${
            currentPage === totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } transition`}
          disabled={currentPage === totalPages}
        >
          შემდეგი გვერდი ➡️
        </button>
      </div>
    </div>
  );
}
