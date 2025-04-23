
import React from 'react'
import Link from 'next/link'


const SubNavbar = () => {
  
  
  return (
    <div className="bg-gray-200 w-full mx-auto space-x-4 font-semibold flex items-center justify-around">
        
            
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-xs sm:text-base md:text-lg">             
                
                  <Link className="text-gray-900 hover:text-gray-400" href="/products/1">Smartphones</Link>
                  <Link className="text-gray-900 hover:text-gray-400" href="/products/2">Laptops</Link>
                  <Link className="text-gray-900 hover:text-gray-400" href="/products/3">Tablets</Link>
                  <Link className="text-gray-900 hover:text-gray-400" href="/products/4">Headphones</Link>
                  <Link className="text-gray-900 hover:text-gray-400" href="/products/5">Cameras</Link>
                  <Link className="text-gray-900 hover:text-gray-400" href="/products/6">Printers</Link>
                  <Link className="text-gray-900 hover:text-gray-400" href="/products/7">Accessories</Link>           

        </div>
    </div>
  )
}

export default SubNavbar