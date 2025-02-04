import Navbar from "../components/Navbar";

export default function Winners() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center">🏆 გამარჯვებულები</h1>
        <p className="text-center mt-2">აქ გამოჩნდებიან ყველა გამარჯვებული სქრინებით!</p>
      </div>
    </div>
  );
}
