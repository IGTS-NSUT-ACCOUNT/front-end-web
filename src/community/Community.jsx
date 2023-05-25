import React from 'react'


export default function Community() {
    return (
        <div className='h-[100vh] flex flex-col gap-72 lg:gap-0'>
            <div className='text-center pt-32'>
                <p className=' w-fit mx-auto !leading-normal font-extrabold text-9xl mt-10 lg:mt-0 lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500'>Community</p>
                <p className='text-slate-300 text-4xl lg:text-2xl w-[40rem] mx-auto'>Explore the largest community of game theorist.</p>
            </div>
            <div className='overflow-hidden overflow-y-hidden flex flex-col lg:flex-row flex-grow justify-center translate-y-[-20%] lg:translate-y-[0] gap-10 lg:gap-5 pt-0 lg:pt-48'>
                <div className='flex justify-center group text-5xl lg:text-base'>
                    <a href='https://www.instagram.com/igts_nsut/?hl=en' className='hidden lg:block shadow-[0_0_50px_10px_rgb(79,70,229,0.22)] lg:shadow-[0_0_100px_40px_rgb(79,70,229,0.22)] group-hover:translate-y-[-30%] group-hover:blur-sm transition-all  rounded-full'><img src={'https://drive.google.com/uc?export=view&id=1-19HQXuBie_IoAhabiMD6cXfwhL4m1q2'} alt='instagram' className='rounded-xl lg:rounded-3xl w-[40vh]' /></a>
                    <button className='w-[30rem] h-[10rem] flex gap-10 lg:gap-0 px-10 justify-center lg:w-fit lg:h-fit text-slate-50 bg-gradient-to-r from-blue-400 to-pink-500 shadow-[0_0_60px_40px_rgb(0,0,0,0.32)] py-5 rounded-full lg:absolute lg:bottom-10 mx-0 lg:mx-auto opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity delay-100'><i className="fa-brands fa-instagram mr-1"></i> Join Instagram</button>
                </div>
                <div className='flex justify-center group lg:translate-y-[-20%] text-5xl lg:text-base '>
                    <a href='https://www.facebook.com/igts.nsit/' className='hidden lg:block shadow-[0_0_50px_10px_rgb(219,39,119,0.22)] lg:shadow-[0_0_100px_40px_rgb(219,39,119,0.22)] group-hover:translate-y-[-10%] group-hover:blur-sm transition-all  rounded-full'><img src={'    https://drive.google.com/uc?export=view&id=14Za5upH6EshJHcSZO034FTMOVpxPyupd'} alt='facebook' className='rounded-xl lg:rounded-3xl  w-[40vh]' /></a>
                    <button className='w-[30rem] h-[10rem] flex gap-10 lg:gap-0 px-10 justify-center lg:w-fit lg:h-fit text-slate-50 bg-gradient-to-r from-blue-400 to-pink-500 shadow-[0_0_60px_40px_rgb(0,0,0,0.32)] py-5 rounded-full lg:absolute lg:bottom-[-2.5rem] mx-0 lg:mx-auto opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity delay-100'><i className="fa-brands fa-facebook mr-1"></i> Join Facebook</button>
                </div>
                <div className='flex justify-center group text-5xl lg:text-base '>
                    <a href='https://www.linkedin.com/company/igts-nsut/?originalSubdomain=in' className='hidden lg:block shadow-[0_0_50px_10px_rgb(79,70,229,0.22)] lg:shadow-[0_0_100px_40px_rgb(79,70,229,0.22)] group-hover:translate-y-[-30%] group-hover:blur-sm transition-all  rounded-full'><img src={'    https://drive.google.com/uc?export=view&id=1FZPY-d5vIZS3kPvCOs_u-MXY2skUjPs_'} alt='linkedin' className='rounded-xl  w-[40vh] lg:rounded-3xl ' /></a>
                    <button className='w-[30rem] h-[10rem] flex gap-10 lg:gap-0 px-10 justify-center lg:w-fit lg:h-fit text-slate-50 bg-gradient-to-r from-blue-400 to-pink-500 shadow-[0_0_60px_40px_rgb(0,0,0,0.32)] py-5 rounded-full lg:absolute lg:bottom-10 mx-0 lg:mx-auto opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity delay-100'><i className="fa-brands fa-linkedin mr-1"></i> Join linkedIn</button>
                </div>
            </div>
        </div>
    )
}
