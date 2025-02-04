import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">🎉 LuckyGeorgia</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">მთავარი</Link></li>
          <li><Link href="/winners">გამარჯვებულები</Link></li>
          <li><Link href="/contact">კონტაქტი</Link></li>
        </ul>
      </div>
    </nav>
  );
}
