import { Hero } from "@/components/Hero";
import { CurrentStatus } from "@/components/CurrentStatus";
import { Skills } from "@/components/Skills";
import { GitHubStats } from "@/components/GitHubStats";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Hero />
        <CurrentStatus />
        <Skills />
        <GitHubStats />
      </div>
    </main>
  );
}