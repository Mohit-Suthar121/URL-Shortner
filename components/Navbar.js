import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navwrapper w-full h-20 flex justify-center items-center">
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">

                {/* Main Glass Container */}
                <div className="relative flex items-center justify-between px-6 py-3 rounded-full 
                      bg-[#0B0E14]/80 backdrop-blur-md border border-white/10 
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-white tracking-tight text-lg">Rapid<span className="text-[#8B5CF6]">Link</span></span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link href="/features">Features</Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link href="/showcase">Showcase</Link>
                        </li>
                    </ul>

                    {/* Subtle Bottom Glow Line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;