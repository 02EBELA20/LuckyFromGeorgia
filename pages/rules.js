import Navbar from "../components/Navbar";

export default function Rules() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-yellow-400">

          🎯 თამაშის წესები და ინსტრუქცია
        </h1>
        
          {/* 🔹 როგორ მივიღო მონაწილეობა */}
          <div className=" mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-400">🎁 როგორ მივიღო მონაწილეობა?</h2>
            <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
            <li>📢 უნდა გამოიწეროთ ყველა სოციალური ქსელი (YouTube, Instagram, TikTok, Facebook).</li>
              <li>👥ყოველ კვირას Instagram, TikTok და Facebook პოსტებზე უნდა მონიშნოთ 2 რეალური ადამიანი.</li>
              <li>💬 YouTube-ზე  კი დატოვეთ პატარა გული მოტივაციისთვის 💖.</li>
              
            </ul>
          </div>

        {/* 🔹 წესები */}
        <div className="mt-4 space-y-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-400">📌 წესები </h2>
            <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
            <li>✅ გამარჯვებული შეირჩევა შემთხვევთობის (random) პრინციპით.</li>
            <li>💰 პრიზი ჩაერიცხება გამარჯვებულს, როგორც კი შევძლებთ კონტაქტზე გასვლას.</li>
            <li>🚫  აკრძალულია შეურაცხმყოფელი ან დამამცირებელი კომენტარების დაწერა.</li>
              
              <li>⚠ ერთზე მეტი ექაუნთით თამაშში ჩართვა !</li>
              <li>🔞 სიძულვილის შემცველი ან დისკრიმინაციული კომენტარები!</li>
              <li>⛔ ადმინისტრატორის შეურაცხყოფა ან თამაშის წესების დარღვევა!</li>
             
            </ul>
          </div>


          {/* 🔹 საპრიზო ფონდი */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-400">💰 საპრიზო ფონდი</h2>
            <p className="mt-3 text-gray-300">
              ყოველ კვირას ვათამაშებ **150₾-ს**, რომელიც გაიზრდება ან გაორმაგდება ყოველი 10,000 გამომწერზე!

              
            </p>
            
          </div>
           {/* 🔄 თანხის გადათამაშება */}
           <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white">🔄 თანხის გადათამაშება</h2>
            <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
              <li>📢 თუ გამარჯვებული ვერ აკმაყოფილებს ყველა პირობას, თანხა ხელახლა გათამაშდება!</li>
              <li>🔄 პრიზი გათამაშდება იმდენჯერ, სანამ ნამდვილი გამარჯვებული არ მოიძებნება.</li>
              <li>📢 თუ გამარჯვებული არ გამოვა კონტაქტზე 2 დღის განმავლობაში, მესამე დღეს თანხა ხელახლა გათამაშდება!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
