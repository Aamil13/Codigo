"use client"
import { footerData } from './footerData'
import styles from './styles.module.css'
import {FaFacebookF, FaTwitter,FaLinkedinIn } from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import FooterForm from "./FooterForm"


const Footer = () => {
  return (
    <>
    <div className='p-20 bg-gray-100'>
        <h2 className='text-red-600 text-center text-3xl font-bold mb-20'>Let's have a chat</h2>

        <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
<label htmlFor="my-drawer-4" className='flex justify-between flex-wrap mb-10' onClick={()=>document.body.style.overflow="hidden"}>
        {footerData?.map((item, index)=>(
            <div key={index} className={`w-full mb-12 lg:w-1/5 border-b lg:border-b-0 ${index !== 4 && 'lg:border-r border-black'} p-2 cursor-pointer ${styles.links}`}>
            <div className='flex justify-between items-center mb-3'>
            <h2 className={`text-2xl font-bold ${styles.title}`}>{item.title}</h2>
            <h2 className={`text-2xl text-red-600 pr-5 ${styles.arrow}`}>&rarr;</h2>
            
            </div>
            
            <p className='text-sm'>{item.desc}</p>
            </div>
        ))}
</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay" onClick={()=>document.body.style.overflow="auto"}></label>
    <ul className="menu p-4 w-full md:w-[600px] h-[100vh] overflow-y-auto shadow-md min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <div className='p-10'>
        <div className='flex justify-end'>
          <label htmlFor='my-drawer-4' className='text-xl font-bold cursor-pointer' onClick={()=>document.body.style.overflow="auto"}>X</label>
        </div>
        <FooterForm/>

      </div>
    </ul>
  </div>
</div>
{/* <div className='flex justify-between flex-wrap mb-10'>
        {footerData?.map((item, index)=>(
            <div key={index} className={`w-full mb-12 lg:w-1/5 border-b lg:border-b-0 ${index !== 4 && 'lg:border-r border-black'} p-2 cursor-pointer ${styles.links}`}>
            <div className='flex justify-between items-center mb-3'>
            <h2 className={`text-2xl font-bold ${styles.title}`}>{item.title}</h2>
            <h2 className={`text-2xl text-red-600 pr-5 ${styles.arrow}`}>&rarr;</h2>
            
            </div>
            
            <p className='text-sm'>{item.desc}</p>
            </div>
        ))}
</div> */}

<div className='flex justify-center items-center gap-8'>
<FaFacebookF size={28} className='cursor-pointer'/>
<FaTwitter size={28} className='cursor-pointer'/>
<FaLinkedinIn size={28} className='cursor-pointer'/>
<AiFillInstagram size={28} className='cursor-pointer'/>
</div>
<div className='text-center mt-8'>
    <p className='mb-8 text-xs sm:text-base'>Copyright © Codigo - Mobile App Developer Singapore</p>
    <p className='text-xs sm:text-base'>+65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970</p>
</div>
    </div>

    </>
  )
}

export default Footer