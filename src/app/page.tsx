import Link from "next/link";
import { cards } from "./card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-6">
      <main className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Utility Apps Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link key={card.title} href={card.link}>
              <div className="group cursor-pointer rounded-2xl border border-zinc-700 bg-gray-700 p-6 shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-600 hover:shadow-2xl">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {card.emoji}
                </div>

                <h2 className="text-xl font-semibold text-white">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-300">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
