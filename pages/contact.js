import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center">📞 კონტაქტი</h1>
        <p className="text-center mt-2">
          შეგვიძლია დაგეხმაროთ! დაგვიკავშირდით:
        </p>
        <ul className="text-center mt-4">
          <li>📧 Email: info@luckygeorgia.org</li>
          <li>📱 Instagram: @LuckyGeorgia</li>
          <li>🎥 YouTube: LuckyGeorgia</li>
        </ul>
      </div>
    </div>
  );
}
