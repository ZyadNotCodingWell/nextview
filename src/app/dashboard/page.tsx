'use client'
import Image from "next/image";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between overflow-hidden" >
      <Image src={"/dealership.jpg"} alt="Dealership" layout="fill" objectFit="cover" objectPosition="center" className="[mask-image:linear-gradient(to_right,transparent,black_50%,transparent)] pointer-events-none" />
      <div className="absolute inset-0 flex flex-none w-full h-full items-center justify-center py-24 px-2 md:px-8 lg:px-16">
        <div className="flex flex-col relative overflow-hidden items-center justify-center gap-12 rounded-3xl border border-white/20">
					<div className="absolute inset-0 flex w-full h-full flex-none">
						<div className="relative w-full">
							<motion.div 
  						  className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(to_right,transparent,#2d7aed_50%,transparent)]"
  						  initial={{ x: '-100%' }}
  						  animate={{ x: '100%' }}
  						  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
  						/>
							<motion.div 
        			  className="absolute right-0 w-1 h-full bg-[linear-gradient(to_bottom,transparent,#2d7aed_50%,transparent)]"
        			  initial={{ y: '-100%' }}
        			  animate={{ y: '100%' }}
        			  transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'linear' }}
        			/>
        			<motion.div 
        			  className="absolute bottom-0 left-0 w-full h-1 bg-[linear-gradient(to_right,transparent,#2d7aed_50%,transparent)]"
        			  initial={{ x: '100%' }}
        			  animate={{ x: '-100%' }}
        			  transition={{ duration: 4, delay: 0, repeat: Infinity, ease: 'linear' }}
        			/>
							<motion.div 
        			  className="absolute left-0 w-1 h-full bg-[linear-gradient(to_bottom,transparent,#2d7aed_50%,transparent)]"
        			  initial={{ y: '100%' }}
        			  animate={{ y: '-100%' }}
        			  transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'linear' }}
        			/>
							<motion.div 
							  className="absolute top-0 left-0 w-full h-px bg-[linear-gradient(to_right,transparent,#EC67C1_50%,transparent)]"
							  initial={{ x: '-100%' }}
							  animate={{ x: '100%' }}
							  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
							/>
							<motion.div 
							  className="absolute right-0 w-px h-full bg-[linear-gradient(to_bottom,transparent,#EC67C1_50%,transparent)]"
							  initial={{ y: '-100%' }}
							  animate={{ y: '100%' }}
							  transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'linear' }}
							/>
							<motion.div 
							  className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(to_right,transparent,#EC67C1_50%,transparent)]"
							  initial={{ x: '100%' }}
							  animate={{ x: '-100%' }}
							  transition={{ duration: 4, delay: 0, repeat: Infinity, ease: 'linear' }}
							/>
							<motion.div 
							  className="absolute left-0 w-px h-full bg-[linear-gradient(to_bottom,transparent,#EC67C1_50%,transparent)]"
							  initial={{ y: '100%' }}
							  animate={{ y: '-100%' }}
							  transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'linear' }}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-14 w-fit h-fit py-24 px-6 border border-white/50 bg-black/25 backdrop-blur-xl rounded-3xl">
					<div className="text-transparent text-xl bg-[linear-gradient(to_bottom_right,#2d7aed,#EC67C1)] bg-clip-text bg-blend-lighten md:text-5xl max-w-64 md:max-w-xl text-center font-semibold">The future of your brand starts here</div>
          	<form className=" flex flex-col px-4 md:px-0 md:min-w-[30rem] gap-6">

          	  <label className="flex flex-col text-center text-white/50 text-xl md:text-xl">
          	    Full Name
          	   		<input style={{ outline: "none"}} className="bg-black/40 text-white/50 px-4 text-sm md:text-base py-1.5 rounded-lg mt-1  md:rounded-xl border border-white/30" type="text" required />

          	  </label>
		
          	  <label className="flex flex-col text-center text-white/50 text-xl md:text-xl">
          	    Email
          	    <input style={{ outline: "none"}} className="bg-black/40 text-white/50 px-4 text-sm md:text-base py-1.5 rounded-lg mt-1  md:rounded-xl border border-white/30" type="email" required />
          	  </label>
		
          	  <label className="flex flex-col text-center text-white/50 text-xl md:text-xl">
          	    Phone Number
          	    <input style={{ outline: "none"}} className="bg-black/40 text-white/50 px-4 text-sm md:text-base py-1.5 rounded-lg mt-1 md:rounded-xl border border-white/30" type="tel" required />
          	  </label >
		
          	  <button type="submit" className="flex w-fit relative group px-4 mt-6 py-1 bg-[linear-gradient(to_bottom_right,#2d7aed,#EC67C1)] border font-bold self-center mx-auto hover:border-white/80 transition duration-300 text-white/10 bg-clip-text border-white/30 rounded-xl text-xl md:text-2xl">
								<div className="absolute inset-0 -z-10 rounded-xl bg-black/40 group-hover:bg-black/60 transition duration-700" />
								Submit
							</button>
          	</form>
					</div>
        </div>
      </div>
    </main>
  );
}