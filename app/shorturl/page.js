"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Page = () => {
    useEffect(() => {
        setShortnameLink("")
    }, [])
    const notify = () => toast.success('Copied to Clipboard!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });;
    const { data: session } = useSession();
    async function handleClick() {
        setLoading(true);
        const res = await fetch("/api/connectDb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(linkData)
        })
        if (!res.ok) {
            setShortnameExist(true);
            setLoading(false);
            return;
        }
        setShortnameExist(false);
        const data = await res.json();

        console.log("The response from the backend: ", data);
        setShortnameLink(linkData.shortname);
        setLinkData({
            websiteurl: "",
            shortname: ""
        })
        setDataFetched(true);
        setLoading(false)

    }
    function handleChange(e) {
        setLinkData(prev => ({ ...prev, [e.target.name]: e.target.value }))

    }

    async function handleCopy() {
        await navigator.clipboard.writeText(window.location.origin + "/" + shortnameLink);
        notify();
    }


    const [linkData, setLinkData] = useState({
        websiteurl: "",
        shortname: ""
    });
    const [dataFetched, setDataFetched] = useState(false)
    const [shortnameLink, setShortnameLink] = useState();
    const [shortnameExist, setShortnameExist] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className="maincontainer w-full min-h-screen flex flex-col items-center justify-center bg-[#050505] text-slate-200 p-6">

            {session && <div className="loggedin text-5xl mb-6 font-bold bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent "> Welcome {session?.user?.name}</div>}

            {/* Background Accent Blur - Optional for extra "cool" factor */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Linkbox Container */}
            <div className="relative linkbox border border-slate-800/60 bg-slate-900/40 backdrop-blur-xl rounded-[2rem] w-full max-w-2xl flex flex-col items-center shadow-2xl  ">

                {/* Top decorative bar */}
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

                <div className="inputbars flex flex-col gap-8 justify-center items-center w-full p-8 md:p-12 ">

                    <div className="text-center mb-2 ">
                        <h2 className="text-3xl font-bold bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">Create New Link</h2>
                        <p className="text-slate-500 text-sm mt-2">Paste your long URL and choose a catchy name.</p>
                    </div>

                    {/* Website URL Input */}
                    <div className="w-full flex flex-col gap-3 ">
                        <label htmlFor="websiteurl" className="text-sm font-semibold text-slate-400 ml-1 uppercase tracking-wider">
                            Website URL
                        </label>
                        <input
                            onChange={handleChange}
                            value={linkData.websiteurl}
                            placeholder="https://example.com/very-long-link..."
                            className="websiteurl h-14 bg-slate-950/50 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none rounded-2xl w-full px-6 transition-all duration-300 placeholder:text-slate-600 text-slate-100"
                            name="websiteurl"
                            type="text"
                        />
                    </div>

                    {/* ShortName Input */}
                    <div className="w-full flex flex-col gap-3">
                        <div className="wrapper flex gap-4 items-center">


                            <label htmlFor="shortname" className="text-sm font-semibold text-slate-400 ml-1 uppercase tracking-wider">
                                Custom Short Name
                            </label>
                            {shortnameExist && <div className="error text-red-400">*Shorname already exists</div>}
                        </div>
                        <div className="relative w-full">
                            {/* Small prefix hint for UX */}
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 font-medium">link.me/</span>
                            <input
                                onChange={handleChange}
                                value={linkData.shortname}
                                placeholder="my-awesome-link"
                                className="shortname h-14 bg-slate-950/50 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none rounded-2xl w-full pl-24 pr-6 transition-all duration-300 placeholder:text-slate-700 text-slate-100"
                                name="shortname"
                                type="text"
                            />
                        </div>
                    </div>

                    {/* Generate Button */}
                    <div className="w-full pt-4 ">
                        <button disabled={loading} onClick={handleClick} className={`w-full cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl py-4 transition-all duration-300 active:scale-[0.98] shadow-lg shadow-indigo-600/20 flex justify-center items-center gap-2 group ${loading ? "opacity-50" : "opacity-100"} `}>
                         {loading?<div className="w-6 h-6 border-4 border-white border-b-transparent rounded-full inline-block box-border animate-spin"></div>:<div className='flex gap-3 items-center'>
                            <span> Generate Short URL</span>
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                         </div>}
                         
                           
                        </button>
                    </div>


                    {dataFetched && <div className="anotherbox  w-full h-24 shrink-0 flex flex-col gap-4">
                        <div className='font-semibold  text-xl uppercase  text-slate-400'>
                            Your Generated Short Url :
                        </div>
                        <div className='flex gap-4 w-full border rounded-xl items-center justify-between p-4 h-12 border-slate-800 bg-slate-950/50'>

                            {<div>{window.location.origin}/{shortnameLink}</div>}
                            <div onClick={handleCopy} className='cursor-pointer group  rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#6161ff29]'>
                                <svg className=' fill-white group-hover:fill-blue-300' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                                </svg>
                            </div>
                        </div>
                    </div>}

                </div>

            </div>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce} />
        </div>
    )
}

export default Page