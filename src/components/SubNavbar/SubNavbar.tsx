
import React from 'react'
import Link from 'next/link'


const SubNavbar = () => {
  
  
  return (

    <div className="bg-gray-200 w-full mx-auto space-x-4 font-semibold flex items-center justify-between px-4 py-2">
      
      {/* Menú hamburguesa visible en móviles */}
      <div className="sm:hidden">
        <button className="text-gray-900 hover:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú de enlaces */}
      <div className="hidden sm:flex space-x-6 text-xs sm:text-base md:text-lg">
        <Link className="text-gray-900 hover:text-gray-400" href="/products/1">Smartphones</Link>
        <Link className="text-gray-900 hover:text-gray-400" href="/products/2">Laptops</Link>
        <Link className="text-gray-900 hover:text-gray-400" href="/products/3">Tablets</Link>
        <Link className="text-gray-900 hover:text-gray-400" href="/products/4">Headphones</Link>
        <Link className="text-gray-900 hover:text-gray-400" href="/products/5">Cameras</Link>
        <Link className="text-gray-900 hover:text-gray-400" href="/products/6">Printers</Link>
        <Link className="text-gray-900 hover:text-gray-400" href="/products/7">Accessories</Link>
      </div>
    </div>
    // <div className="bg-gray-200 w-full mx-auto space-x-4 font-semibold flex items-center justify-around">
        
            
    //     <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-xs sm:text-base md:text-lg">             
                
    //               <Link className="text-gray-900 hover:text-gray-400" href="/products/1">Smartphones</Link>
    //               <Link className="text-gray-900 hover:text-gray-400" href="/products/2">Laptops</Link>
    //               <Link className="text-gray-900 hover:text-gray-400" href="/products/3">Tablets</Link>
    //               <Link className="text-gray-900 hover:text-gray-400" href="/products/4">Headphones</Link>
    //               <Link className="text-gray-900 hover:text-gray-400" href="/products/5">Cameras</Link>
    //               <Link className="text-gray-900 hover:text-gray-400" href="/products/6">Printers</Link>
    //               <Link className="text-gray-900 hover:text-gray-400" href="/products/7">Accessories</Link>           

    //     </div>
    // </div>
  )
}

export default SubNavbar