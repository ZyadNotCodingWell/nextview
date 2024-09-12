
'use client';

import Image from "next/image"
import Dashboard from "../../public/DashboardStyles.jpg"
import DashboardLux from "../../public/Dashboard.jpg"
import Holo from "../../public/Hologarphic.jpg"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react";

export default function Style() {


	const [activeState, setActiveState] = useState([true, false, false]);
	const textValues = ['Elegance', 'Sophistication', 'Innovation'];

  const handleClick = (index: number) => {
    setActiveState(activeState.map((state, i) => i === index));
  };

	return(
		<div className="flex flex-none relative flex-col items-center w-full gap-8 h-fit">
			<div className="text-2xl md:text-4xl text-white/90 font-semibold text-center">Stylised to your brand</div>
			<div className="max-w-full md:max-w-xl text-white/60 text-justify md:text-center tracking-wide text-xs md:text-base lg:text-2xl">Every brand is unique, our UI is tailored to match your brand identity</div>
			<div className="hidden lg:flex absolute left-2/3 translate-x-12 -z-10 w-px h-[125%] flex-none bg-white/30 [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)] overflow-hidden">
				<motion.div className="flex flex-none absolute inset-0 w-px h-1/3 bg-[linear-gradient(to_bottom,transparent,#2d7aed_50%,transparent)]"
				initial={{ y: '-100%' }}
				animate={{ y: '300%' }}
				transition={{ duration: 2, repeat: Infinity, ease: 'linear'}}></motion.div>
				<motion.div className="flex flex-none absolute left-0 w-px h-1/3 bg-[linear-gradient(to_bottom,transparent,#EC67C1_50%,transparent)]"
				initial={{ y: '-100%' }}
				animate={{ y: '300%' }}
				transition={{ duration: 2, repeat: Infinity, ease: 'linear'}}></motion.div>
			</div>
			<div className="hidden lg:flex absolute left-2/3 translate-x-20 -z-10 w-px h-[125%] flex-none bg-white/30 [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)] overflow-hidden">
				<motion.div className="flex flex-none absolute inset-0 w-px h-1/3 bg-[linear-gradient(to_bottom,transparent,#2d7aed_50%,transparent)]"
				initial={{ y: '300%' }}
				animate={{ y: '-100%' }}
				transition={{ duration: 2, repeat: Infinity, ease: 'linear'}}></motion.div>
				<motion.div className="flex flex-none absolute left-0 w-px h-1/3 bg-[linear-gradient(to_bottom,transparent,#EC67C1_50%,transparent)]"
				initial={{ y: '300%' }}
				animate={{ y: '-100%' }}
				transition={{ duration: 2, repeat: Infinity, ease: 'linear'}}></motion.div>
			</div>
			<div className="hidden lg:flex absolute left-2/3 translate-x-28 -z-10 w-px h-[125%] flex-none bg-white/30 [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)] overflow-hidden">
				<motion.div className="flex flex-none absolute inset-0 w-px h-1/3 bg-[linear-gradient(to_bottom,transparent,#2d7aed_50%,transparent)]"
				initial={{ y: '-100%' }}
				animate={{ y: '300%' }}
				transition={{ duration: 2, repeat: Infinity, ease: 'linear'}}></motion.div>
				<motion.div className="flex flex-none absolute left-0 w-px h-1/3 bg-[linear-gradient(to_bottom,transparent,#EC67C1_50%,transparent)]"
				initial={{ y: '-100%' }}
				animate={{ y: '300%' }}
				transition={{ duration: 2, repeat: Infinity, ease: 'linear'}}></motion.div>
			</div>
			<div className="flex flex-col lg:flex-row w-full border border-white/10 py-8 rounded-3xl border-x-0 border-t-0 h-full self-center mx-auto flex-none justify-between gap-8">
				<div className="flex flex-col lg:flex-row flex-none w-full h-full items-center justify-center lg:gap-36">
					<div className="flex flex-row lg:flex-col gap-4 w-fit h-full items-center">
						{textValues.map((text, index) => (
						          <div
						            key={index}
						            className={`flex flex-col-reverse w-full gap-5 justify-center ${activeState[index] ? 'active' : ''}`}
						            onClick={() => handleClick(index)}
						          >
						            <div className={activeState[index] ? "flex w-full h-px bg-[linear-gradient(to_right,#EC67C1,#2d7aed)] [mask-image:linear-gradient(to_right,black_40%,transparent_120%)]" : "flex w-full h-px bg-white/30 [mask-image:linear-gradient(to_right,black_40%,transparent)]"} />
						            <div className={ activeState[index]? "text-white text-sm lg:text-3xl" : "text-white/30 hover:text-white/50 transition duration-300 text-sm lg:text-3xl"}>{text}</div>
						          </div>
						        ))}
					</div>
					<div className="flex mt-5 lg:mt-0 flex-row w-[420px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[650px] lg:h-[400px] flex-none rounded-[36px] [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] overflow-hidden">
						<motion.div className="flex flex-row w-full h-full gap-2"
    				  initial={{ x: 0 }}
    				  animate={{ x: activeState[0] ? 0 : activeState[1] ? "-101%" : "-202%" }}
    				  transition={{ duration: 0.7, ease: 'linear' }}>

    				  <div className="flex flex-none rounded-[36px] border border-neutral-600 w-full h-full" style={{ backgroundImage: `url("${DashboardLux.src}")`, backgroundSize: "cover" }} />
    				  <div className="flex flex-none rounded-[36px] border border-neutral-600 w-full h-full" style={{ backgroundImage: `url("${Dashboard.src}")`, backgroundSize: "cover" }} />
    				  <div className="flex flex-none rounded-[36px] border border-neutral-600 w-full h-full" style={{ backgroundImage: `url("${Holo.src}")`, backgroundSize: "cover" }} />
    			
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}