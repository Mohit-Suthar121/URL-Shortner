"use client"

import { signIn } from 'next-auth/react'
import LoginButtons from '@/components/LoginButtons'
import React from 'react'
import Link from 'next/link'

const LoginPage = () => {

    async function handleLogin(provider) {
      await signIn(provider,{
        callbackUrl:'/shorturl'
      })
    }

    return (
        <div className='relative w-full min-h-screen flex justify-center overflow-hidden'>

            {/* Background Decorative Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22D3EE]/5 blur-[120px] rounded-full" />

            <div className="z-10 w-full max-w-150 px-6 py-12 flex flex-col gap-10 ">

                {/* Header Section */}
                <div className="text-center mb-10 space-y-3">
                    <p className='text-3xl text-white font-bold '>
                        Login with the following
                    </p>
                </div>

                {/* The Login Card */}
                <div className="w-full bg-[#161B22]/40 backdrop-blur-2xl border border-white/5 p-8 rounded-[2rem] shadow-2xl flex flex-col gap-3">
                    <LoginButtons handleLogin={ ()=>{ handleLogin("google")}} image="google-g-2015.svg" name="Google" />
                    <LoginButtons handleLogin={ ()=>{ handleLogin("github")}} image="github-icon-1.svg" name="Github" />
                </div>

            </div>
        </div>
    )
}

export default LoginPage