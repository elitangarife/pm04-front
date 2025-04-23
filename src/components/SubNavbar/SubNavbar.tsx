'use client'
import React from 'react'
import Link from 'next/link'


const SubNavbar = () => {
  return (
    <div className="bg-gray-200 w-full mx-auto px-4 py-2">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm md:text-base font-semibold text-gray-900">
        <Link className="hover:text-gray-400" href="/products/1">Smartphones</Link>
        <Link className="hover:text-gray-400" href="/products/2">Laptops</Link>
        <Link className="hover:text-gray-400" href="/products/3">Tablets</Link>
        <Link className="hover:text-gray-400" href="/products/4">Headphones</Link>
        <Link className="hover:text-gray-400" href="/products/5">Cameras</Link>
        <Link className="hover:text-gray-400" href="/products/6">Printers</Link>
        <Link className="hover:text-gray-400" href="/products/7">Accessories</Link>
      </div>
    </div>
  );
};

export default SubNavbar;