'use client'
import React from 'react'
import Link from 'next/link'


const SubNavbar = () => {
  return (
    <div className="bg-gray-200 w-full mx-auto px-4 py-2">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm md:text-base font-semibold text-gray-900">
        <Link className="hover:text-gray-400" href="/products/1">Celulares</Link>
        <Link className="hover:text-gray-400" href="/products/2">Portátiles</Link>
        <Link className="hover:text-gray-400" href="/products/3">Tabletas</Link>
        <Link className="hover:text-gray-400" href="/products/4">Auriculares</Link>
        <Link className="hover:text-gray-400" href="/products/5">Cámaras</Link>
        <Link className="hover:text-gray-400" href="/products/6">Impresoras</Link>
        <Link className="hover:text-gray-400" href="/products/7">Accesorios</Link>
      </div>
    </div>
  );
};

export default SubNavbar;