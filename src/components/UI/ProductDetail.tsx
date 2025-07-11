'use client'

import { useAuth } from '@/context/AuthContext'
import { IProduct } from '@/utils'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'


const ProductDetail: React.FC<IProduct> = ({id, name, image, description, stock, price, categoryId}) => {
    const router = useRouter()
    const {userData} = useAuth()
    
  const handleAddToCart = () =>  {  
    if(!userData?.token){
      toast.error("Inicia sesión para comprar")
        
        router.push("/login")
    }else{
      const cart: IProduct[] =JSON.parse(localStorage.getItem("cart") || "[]")
      const productExist = cart.some((item:IProduct) => {
        if(item.id === id) return true
        return false
      })

      if(productExist){
        toast.success("Este producto ya se encuentra en el carrito", {icon: '👏'})
        router.push("/cart")
      } else {
          cart.push({
              id, name, image, description, stock, price, categoryId
          })
      localStorage.setItem("cart", JSON.stringify(cart))
      toast.success("El producto fue agregado al carrito")
      router.push("/")
    }
  }
  }
  
  return  (
    <div className="max-w-3xl mx-auto px-4 py-8 m-4 mb-10">
      <h1 className="text-center font-bold text-2xl mb-10">Detalle del producto</h1>

      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={name}
            className="max-w-full h-64 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-2 text-center md:text-left">
          <h2 className="uppercase font-bold text-lg mb-10">{name}</h2>
          <p className="text-sm mb-5">{description}</p>
          <p className="text-md font-medium mb-5 text-green-600">Precio: ${price}</p>
          <p className="text-sm">Unidades disponibles: {stock}</p>
          <button
            onClick={handleAddToCart}
            className="mt-4 py-2 px-4 rounded-xl font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}


export default ProductDetail