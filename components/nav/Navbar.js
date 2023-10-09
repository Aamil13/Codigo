import React from 'react'
import Link from 'next/link'
import { navRoutes } from './navroutes'
import {FaHamburger} from 'react-icons/fa'


const Navbar = () => {
  return (
<nav className="navbar bg-base-100 z-50">
  <div className="flex-none lg:hidden">
  <div className="drawer drawer-end">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer" className="btn btn-sx rounded-full bg-red-600 text-white drawer-button">
      <FaHamburger/>
    </label> */}
  </div> 
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu relative p-4 w-80 max-sm:w-full min-h-full bg-[#3C2837] text-base-content flex flex-col items-center justify-center">
    <label htmlFor="my-drawer" className="font-bold text-2xl  text-white drawer-button absolute top-2 right-6">
      X
    </label>
      {/* Sidebar content here */}
      {/* <li className='my-3 bg-white text-red-600 rounded-md text-center text-2xl mx-3'>CODIGO</li>
      {navRoutes?.map((item)=>(
      <li><Link href={item.link} key={item.link} className='mx-3'>{item.name}</Link></li>
    ))}
    <Link href='/' className='btn bg-white btn-sm mx-3 w-full my-3'>Login</Link>
    <Link href='/' className='btn bg-red-600 btn-sm text-white w-full mx-3'>Register</Link>   */}
    <li className='text-2xl text-white p-2 font-bold' >Work</li>
    <li className='text-2xl text-white p-2 font-bold' >Solution</li>
    <li className='text-2xl text-white p-2 font-bold' >Services</li>
    <li className='text-2xl text-white p-2 font-bold' >Tech for hire</li>
    <li className='text-2xl text-white p-2 font-bold' >About us</li>
    <li className='text-2xl text-white p-2 font-bold' >Blog</li>
    <li className='text-2xl text-white p-2 font-bold' >Request</li>
    <li className='text-2xl text-white p-2 font-bold' >Let's Chat</li>
    </ul>
    
  </div>
</div>
  </div>
  <div className="flex-1">
    <Link href="/" className="btn btn-ghost normal-case text-2xl text-red-600">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    CODIGO</Link>
  </div>
  <div className="hidden lg:flex">
    {navRoutes?.map((item)=>(
      <Link href={item.link} key={item.link} className='mx-3'>{item.name}</Link>
    ))}
    <Link href='/' className='btn btn-neutral mx-3'>Request a Quote</Link>
    
  </div>
  <label htmlFor="my-drawer" className="btn btn-sx lg:hidden rounded-full bg-black text-white drawer-button">
      <FaHamburger/>
    </label>
</nav>
  )
}

export default Navbar