'use client';
import Link from "next/link";
import MailIcon from "./Icons";
import { motion } from "framer-motion";

export default function Header() {
	return (
		<div className="container fixed self-center mx-auto z-40 rounded-3xl backdrop-blur-sm flex flex-row w-full justify-between items-center">
			<div className="flex w-full items-center justify-between py-4 px-8 md:px-16">
				<div className="flex flex-row w-fit justify-center gap-4">
					<Link href="/" className="flex items-center justify-center w-fit h-fit">
						<div className="flex items-center w-fit h-fit font-bold text-base md:text-2xl text-white/80 tracking-wide">NextView</div>
					</Link>
				</div>
				<div className="flex flex-row group w-fit justify-center items-center gap-4">
					<Link href="/dashboard">
						<div className="text-white/50 group-hover:text-white text-sm md:text-xl tracking-wide transition">CONTACT US</div>
					</Link>
					<div className="bg-[linear-gradient(to_bottom_right,#2d7aed,#EC67C1)] rounded-full w-6 h-6 p-1 flex flex-none">
						<MailIcon />
					</div>
				</div>
			</div>
			<div className="absolute inset-0 border border-b-white/30 border-x-0 border-t-0 flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pointer-events-none">
				<motion.div className="flex flex-none absolute bottom-0 w-1/3 h-px bg-[linear-gradient(to_right,transparent,#2d7aed_50%,transparent)]"
				initial={{ x: '-100%' }}
				animate={{ x: '300%' }}
				transition={{ duration: 3, repeat: Infinity, ease: 'linear'}}></motion.div>
				<motion.div className="flex flex-none absolute bottom-0 w-1/3 h-px bg-[linear-gradient(to_right,transparent,#EC67C1_50%,transparent)]"
				initial={{ x: '-100%' }}
				animate={{ x: '300%' }}
				transition={{ duration: 3, repeat: Infinity, ease: 'linear'}}></motion.div>
			</div>
		</div>
	);
}