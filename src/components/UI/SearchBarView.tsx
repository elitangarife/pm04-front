'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const SearchBarView = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (searchQuery.length){
            router.push(`/products/${searchQuery}`)
        }else {
            toast.success("No hay nada para buscar")
        }
        setSearchQuery("")
    }

  return (
    <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
            
            <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className='flex-1 px-4 py-2 text-gray-700 focus:outline-none ' type="text" placeholder='Buscar por nombre' />
            
            <button  className="p-2 bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors " type="submit" aria-label="Buscar">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
            </button>

        </form>


    </div>
  )
}

export default SearchBarView