'use client';

import Dashboard from "../../public/CarDashboard.jpg";
import { motion} from "framer-motion";

import React from "react";

	export default function About() {
		return (
			<div className="flex flex-none flex-col items-center w-full gap-8 h-fit">
				<div>
					<div
						className="text-2xl md:text-4xl text-white/90 font-semibold text-center"
					>
						About
					</div>
					<div
						className="max-w-full md:max-w-4xl text-white/60 text-justify md:text-center tracking-wide text-xs md:text-base lg:text-2xl"
					>
						Intuitive and futuristic automobile dashboards that seamlessly
						integrate AI technology with stunning UI design, elevating the
						driving experience for a safer and more enjoyable ride.
					</div>
				</div>
      <div className="flex flex-col w-full h-full self-center mx-auto flex-none [mask-image:linear-gradient(to_left,transparent,black_40%,black_60%,transparent)] md:[mask-image:linear-gradient(to_left,transparent,black_30%,black_70%,transparent)]">
        <div className="flex relative w-full h-px flex-none bg-white/30">
          <motion.div className="flex flex-none absolute bottom-0 w-1/3 h-px bg-[linear-gradient(to_right,transparent,#2d7aed_50%,transparent)]"
            initial={{ x: '-100%' }}
            animate={{ x: '300%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear'}}></motion.div>
          <motion.div className="flex flex-none absolute bottom-0 w-1/3 h-px bg-[linear-gradient(to_right,transparent,#EC67C1_50%,transparent)]"
            initial={{ x: '-100%' }}
            animate={{ x: '300%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear'}}></motion.div>
        </div>
        <div className="flex flex-none w-full bg-center h-[160px] md:h-[380px] lg:h-[720px]" style={{backgroundImage: `url("${Dashboard.src}")`, backgroundSize: "cover" }}></div>
        <div className="flex relative w-full h-px flex-none bg-white/30">
          <motion.div className="flex flex-none absolute bottom-0 w-1/3 h-px bg-[linear-gradient(to_right,transparent,#2d7aed_50%,transparent)]"
            initial={{ x: '300%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 3}}></motion.div>
          <motion.div className="flex flex-none absolute bottom-0 w-1/3 h-px bg-[linear-gradient(to_right,transparent,#EC67C1_50%,transparent)]"
            initial={{ x: '300%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 3}}></motion.div>
        </div>
      </div>
    </div>
  );
}