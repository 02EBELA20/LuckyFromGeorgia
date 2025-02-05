import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center">📞 კონტაქტი</h1>
        <p className="text-center mt-6">
          შეგვიძლია დაგეხმაროთ! დაგვიკავშირდით:
        </p>
        <ul className="text-center mt-4 ">
          <li>▶️ Facebook: https://www.facebook.com/profile.php?id=61573014742100</li>
          <li>📱 Instagram:https://www.instagram.com/luckyfromgeorgia/</li>
          <li>🎥 YouTube: https://www.youtube.com/@luckyfromgeorgia</li>
        </ul>
      </div>
    </div>
  );
}
