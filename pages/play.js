import Link from "next/link";
import { useState } from "react";

export default function Play() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold mb-8">🐷 დობის ისტორია</h1>

      <p className="text-lg max-w-2xl text-center mb-10">
        დობი ოდესღაც უბრალო გოჭი იყო, რომელიც ოცნებობდა გამხდარიყო ყველაზე იღბლიანი გოჭი საქართველოში!  
        ერთხელ, მან მოისმინა, რომ ფული წვიმად ცვიოდა და გადაწყვიტა, თავისი უნარები გამოეცადა.  
        შენ შეგიძლია დაეხმარო დობის ფულის შეგროვებაში! 🤑
      </p>

      {/* 🎮 თამაშის ინსტრუქცია */}
      {showInstructions ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-3">როგორ ვითამაშოთ? 🎮</h2>
          <p>➡️ მარჯვნივ გადასვლა – ისრის მარჯვენა ღილაკი</p>
          <p>⬅️ მარცხნივ გადასვლა – ისრის მარცხენა ღილაკი</p>
          <p>👜 ფულის აღება – უბრალოდ დობი უნდა იყოს კუპიურასთან ახლოს</p>
          <p className="text-yellow-400 font-bold mt-2">2000₾-ზე  დობი სიხარულისგან ცეკვავს და  თანხის შეგროვებას  ახალი ენერგიებით  იწყებს !</p>
          <button
            onClick={() => setShowInstructions(false)}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
          >
            ❌ დახურვა
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowInstructions(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg shadow-lg transition"
        >
          ❓ როგორ ვითამაშოთ?
        </button>
      )}

      {/* 🎮 თამაშის დაწყების ღილაკი */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-lg shadow-lg transition">
          🚀 დაიწყე თამაში დობისთან ერთად!
        </button>
      </Link>
    </div>
  );
}
