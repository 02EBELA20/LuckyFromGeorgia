export default function WinnerCard({ name, amount, date }) {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">💰 მოიგო {amount} ₾</p>
      <p className="text-gray-500">{date}</p>
    </div>
  );
}
