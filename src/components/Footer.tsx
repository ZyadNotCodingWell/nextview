'use client'
import { motion } from "framer-motion"
import { Instagram, LinkedIn, XSocial } from "./LogoIcons"

export default function Footer() {
	return(
		<div className="flex flex-col md:flex-row w-full relative border border-x-0 border-b-0 border-white/30 py-8 px-24 justify-center overflow-hidden">
			

				<motion.div className="flex flex-none absolute top-0 w-1/3 h-px bg-[linear-gradient(to_right,transparent,#2d7aed_50%,transparent)]"
				initial={{ x: '-300%' }}
				animate={{ x: '300%' }}
				transition={{ duration: 6, repeat: Infinity, ease: 'linear'}}></motion.div>
				<motion.div className="flex flex-none absolute top-0 w-1/3 h-px bg-[linear-gradient(to_right,transparent,#EC67C1_50%,transparent)]"
				initial={{ x: '-300%' }}
				animate={{ x: '300%' }}
				transition={{ duration: 6, repeat: Infinity, ease: 'linear'}}></motion.div>

			<div className="w-full flex flex-col gap-8 md:flex-row max-w-6xl">	
				<div className="text-2xl flex w-full text-center items-center justify-center">NextView</div>
				<div className="flex relative w-full flex-row gap-8 items-center justify-center">
					<XSocial />
					<Instagram />
					<LinkedIn />
					<div className="absolute inset-0 z-10 bg-black/50 pointer-events-none"></div>
				</div>
			</div>
		</div>
	)
}