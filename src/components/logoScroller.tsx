'use client';

import Airbus, { AmazonPrime, Delte, DHL, Fujifilm, Iveco, JBL, Jeep, Virgin } from "./LogoIcons";
import { motion } from "framer-motion";



export default function LogoScroller() {
	return(
		<div className="container flex flex-none min-h-48 w-full self-center mx-auto">
			<div className="flex flex-col items-center w-full gap-4">
				<div className="text-base text-center md:text-2xl text-white/60 font-normal">Trusted by 5000+ entreprises worldwide</div>
				<div className="flex flex-col md:flex-row w-full h-80 overflow-hidden items-center justify-center [mask-image:linear-gradient(to_bottom,transparent_30%,black_35%,black_65%,transparent_70%)]">
					<motion.div initial={{y: "0%"}} animate={{y: "-50%"}} transition={{ repeat: Infinity, ease: "linear", duration: 2}} className="flex flex-col w-fit px-14 gap-2">
						<Airbus />
						<Delte />
						<AmazonPrime />
						<Airbus />
						<Delte />
						<AmazonPrime />
					</motion.div>
					<motion.div initial={{y: "-50%"}} animate={{y: "0%"}} transition={{ repeat: Infinity, ease: "linear", duration: 2}} className="flex flex-col w-fit px-14 gap-2">
						<DHL />
						<JBL />
						<Iveco />
						<DHL />
						<JBL />
						<Iveco />
					</motion.div>
					<motion.div initial={{y: "0%"}} animate={{y: "-50%"}} transition={{ repeat: Infinity, ease: "linear", duration: 2}} className="flex flex-col w-fit px-14 gap-2">
						<Jeep />
						<Virgin />
						<Fujifilm />
						<Jeep />
						<Virgin />
						<Fujifilm />
					</motion.div>
				</div>
			</div>
		</div>
	)
}