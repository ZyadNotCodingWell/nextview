import About from "@/components/about";
import Hero from "@/components/hero";
import Innovate from "@/components/Innovate";
import LogoScroller from "@/components/logoScroller";
import Nightmare from "@/components/nightmare";
import Style from "@/components/stylised";
import Image from "next/image";


export default function Home() {
  return (
  <div>
    <main className="flex min-h-screen my-8 flex-col items-center justify-between p-8 md:p-24 overflow-hidden">
        <Hero />
      <div className="container flex flex-col self-center gap-24">
        <LogoScroller />
        <About />
        <Style />
        <Innovate />
        <Nightmare />
      </div>
    </main>
  </div>
  );
}