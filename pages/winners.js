export default function WinnerCard({ name, amount, date }) {
  return (
    <div className="w-full md:w-80 lg:w-96 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600">გამარჯვების თანხა: ₾{amount}</p>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  );
}
