"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  const parallaxRef = React.createRef<HTMLDivElement>();

  const handleParallax = () => {
    const parallaxElement = parallaxRef.current;
    const scrollPosition = window.scrollY;
    const speed = 0.175; 

    if (parallaxElement) {parallaxElement.style.top = `${-scrollPosition * speed}px`;};
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  return (
    <div className="flex flex-none relative w-screen h-screen">
      <div className="flex w-full h-fit ">
        <Image
          src={"/Windshield.jpg"}
          alt="Hero Background Image"
          layout="fill"
          objectFit="cover"
          className="flex flex-col flex-none w-full h-screen pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_35%)]"
        />
        <div
          ref={parallaxRef}
          className="flex absolute inset-0 items-center bg-[linear-gradient(to_bottom,transparent_40%,black_85%)]"
        >
          <div className="flex flex-col h-full container self-center mx-auto items-center gap-8 py-28 md:py-48 lg:py-28">
            <div className="flex max-w-5xl text-4xl md:text-6xl lg:text-8xl text-center bg-[linear-gradient(175deg,white_40%,#666666_85%)] text-transparent bg-clip-text font-bold">
              AI for tomorrow&apos;s world is here now
            </div>
            <Link href="/dashboard" className="rounded-2xl bg-black/50 hover:bg-black/70 transition duration-500">
              <button className="relative flex flex-none w-fit px-4 group py-3 border border-white/40 border-b-0 backdrop-blur-sm hover:border-white/70 hover:border-b-0 transition duration-500 items-center justify-center rounded-2xl bg-[radial-gradient(80%_90%_at_top_left,#1b69db_50%,#da55af)] text-black/25 hover:text-transparent bg-clip-text text-2xl font-black">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}