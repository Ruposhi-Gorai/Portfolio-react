import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Social() {
  return (
    <>
    <div className='flex gap-5 px-5'>
        <div className='bg-[#959dcc25] rounded-full p-3 mt-5'><FaGithub /></div>
        <div className='bg-[#959dcc25] rounded-full p-3 mt-5'><FaLinkedinIn /></div>
        <div className='bg-[#959dcc25] rounded-full p-3 mt-5'><FaDiscord /></div>
    </div>

    </>
  )
}
