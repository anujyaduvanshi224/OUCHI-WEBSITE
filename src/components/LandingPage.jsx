import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='bg-zinc-900 w-full h-screen pt-1'>
      <div className='textstructure mt-30 px-20'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return <div className='masker'>
            <div className='w-fit flex items-end '>
              {index === 1 && (<div className='mr-[1vw] rounded-md  w-[9vw] h-[5vw] relative top-[.2vw] bg-red-500'></div>)}
              <h1 key={index} className='pt-2   uppercase text-[5.5vw] leading-[5.5vw] tracking font-["Founders Grotesk X"] font-bold'>{item}</h1>
            </div>
          </div>
        })}
      </div>
      <div className='border-t-2 border-zinc-800-200 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private compnies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border border-zinc-400 rounded-full font-light text-md uppercase'>start the project</div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full border border-zinc-400'>
            <span className='rotate-45'>
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
