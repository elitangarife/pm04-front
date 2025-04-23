'use client'
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useRouter } from "next/navigation";

const DashboardView = () => {
    const {userData, setUserData} = useAuth()
    const router = useRouter();
    
    const logOutHandler = () => {
        setUserData(null);
        localStorage.clear();
        alert("Sesión cerrada")
        router.push("/")
        
      }

  return (
    <div className="p-4 md:min-h-screen">
        <div >
                <div className="relative m-2">
                    <h1 className="text-center text-2xl font-bold ">¡Hola, {userData?.user.name}!</h1>
                    <Link href={"/"} onClick={logOutHandler} className="inline-block mt-2 md:absolute md:right-0 md:top-0 md:mt-0 py-2 px-3 rounded-xl font-medium transition-colors duration-200 bg-blue-300 text-white hover:bg-blue-400" >⏻Cerrar Sesión</Link>


                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">                
                            
                            <div className="cart-item  bg-gray-100 p-4 rounded-md shadow-md flex flex-col">
                            <h1 className="text-center text-2xl font-bold mb-5">Explorar</h1>
                                <Link className=' font-semibold text-xl' href="/dashboardUser/orders">📦Mis pedidos</Link>
                                <Link className='font-semibold text-xl' href="/cart">🛒Carrito</Link>
                            </div>               
                            <div className="cart-item  bg-gray-100 p-4 rounded-md shadow-md  space-y-4">
                                <h1 className="text-center text-2xl font-bold mb-5">Tus datos</h1>
                                <p className="text-lg font-semibold text-gray-900 mb-4">📍Tu dirección de envio es:<span className="font-normal"> {userData?.user.address}</span></p>
                                <p className="text-lg font-semibold text-gray-900 mb-4">📧Tu email es: <span className="font-normal">{userData?.user.email}</span></p>
                                <p className="text-lg font-semibold text-gray-900 mb-4">📞Tu telefono es: <span className="font-normal">{userData?.user.phone}</span></p>

                            </div>
                </div> 
        </div>
    </div>
  )
}

export default DashboardView