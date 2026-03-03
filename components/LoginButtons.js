"use client"
import React from 'react'

const LoginButtons = ({ image, name ,handleLogin}) => {
    return (
        <button onClick={handleLogin} 
            type="button" 
            className="group w-full h-12 px-5 flex items-center bg-white/5 border border-white/10 
                       rounded-xl transition-all duration-300 ease-out
                       hover:bg-white/10 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]
                       active:scale-[0.98] outline-none focus:ring-2 focus:ring-[#8B5CF6]/50"
        >
            {/* Logo with a slight brightness boost on hover */}
            <div className="w-6 h-6 flex justify-center items-center brightness-90 group-hover:brightness-110 transition-all">
                <img src={image} width={24} height={24} alt={`${name} logo`} className="object-contain" />
            </div>

            {/* Label */}
            <div className="flex-1 text-left ml-4 text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                Continue with <span className="font-bold">{name}</span>
            </div>

            {/* Subtle Arrow that appears on hover */}
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#8B5CF6]">
                →
            </span>
        </button>
    )
}

export default LoginButtons