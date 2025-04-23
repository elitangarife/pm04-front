'use client'
import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import SearchBarView from '../UI/SearchBarView'


const Navbar = () => {
  const {userData} = useAuth()  
  
  return (
    <div className="bg-gray-200 p-4 w-full mx-auto space-x-4 font-bold">
        <div className="text-gray-900 flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-x-6 md:gap-x-8">
            <Link className="hover:text-gray-400 font-bold text-2xl sm:text-xl md:text-3xl" href="/">TuTiendaApple</Link>

                  <div className="w-full sm:w-auto">
                    <SearchBarView/>
                  </div>

              <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-base md:text-lg">             
                
                  <Link className="text-gray-900 hover:text-gray-400" href="/">Home</Link>


                  {userData?.token ? (
                    <>
                    
                      <Link className="text-gray-900 hover:text-gray-400" href="/cart">🛒Carrito</Link>
                      <Link className="text-gray-900 hover:text-gray-400" href="/dashboardUser">Mi Perfil</Link>

                    </>
                  ) : (
                    <  >
                      <Link className="text-gray-900 hover:text-gray-400" href="/login">Iniciar Sesión</Link>
                      <Link className="text-gray-900 hover:text-gray-400" href="/register">Registrarme</Link>
                    </>
                  
                  )}

                             
            </div>
            
        </div>
    </div>
  )
}

export default Navbar