import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fitzlogo from '../../assets/fitzlogo.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex flex-row z-40 top-0 w-full bg-custom-beige border-b-4 border-b-black md:sticky">
            <div className="w-full p-6 flex flex-row justify-between">
                <div className="flex flex-row font-heading text-2xl font-extrabold">
                <img className="h-12 w-12" src={fitzlogo} alt="" />
                </div>

                <div className="flex md:hidden">
                    <ul className="flex flex-wrap gap-8 font-body tracking-widest">
                        <li><a href="#about-me" className="text-custom-orange hover:text-black">About Me</a></li>
                        <li><a href="#experience" className="text-custom-orange hover:text-black">Experience</a></li>
                        <li><a href="#projandcert" className="text-custom-orange hover:text-black">Project & Certs</a></li>
                    </ul>
                </div>

                {/* Burger Menu Icon */}
                <div className="hidden md:flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full bg-custom-beige"
                    >
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="absolute top-2 right-4 focus:outline-none"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className="flex flex-col gap-4 font-body tracking-widest p-4 items-center">
                            <li>
                                <a
                                    href="#about-me"
                                    className="text-custom-orange hover:text-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#what-i-do"
                                    className="text-custom-orange hover:text-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    What I do
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#exp"
                                    className="text-custom-orange hover:text-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Experiences
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
