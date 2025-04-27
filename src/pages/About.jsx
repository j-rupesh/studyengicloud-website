import React from "react"
import aboutImg from "../components/assets/images/about.jpg"
import aboutImgBanner from "../components/assets/images/about-banner.jpg"
import imgs from "../components/assets/images/join1.png"
import { FaBookDead } from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"


export const About = () => {
  return (
    <>
  

      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
 
}
