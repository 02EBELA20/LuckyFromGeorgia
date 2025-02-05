import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* ფიქსირებული ჰედერი */}
      <Navbar />
      {/* მთავარი კონტენტი */}
      <main className="flex-grow mt-24">{children}</main>
      {/* ფიქსირებული ფუტერი */}
      <Footer />
    </div>
  );
}
