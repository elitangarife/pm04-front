'use client'

import { useAuth } from '@/context/AuthContext'
import { IProduct } from '@/utils'
import { useRouter } from 'next/navigation'
import React from 'react'


const ProductDetail: React.FC<IProduct> = ({id, name, image, description, stock, price, categoryId}) => {
    const router = useRouter()
    const {userData} = useAuth()
    
  const handleAddToCart = () =>  {  
    if(!userData?.token){
        alert("Inicia sesión para comprar")
        router.push("/login")
    }else{
      const cart: IProduct[] =JSON.parse(localStorage.getItem("cart") || "[]")
      const productExist = cart.some((item:IProduct) => {
        if(item.id === id) return true
        return false
      })

      if(productExist){
        alert("Este producto ya se encuentra en el carrito")
        router.push("/cart")
      } else {
          cart.push({
              id, name, image, description, stock, price, categoryId
          })
      localStorage.setItem("cart", JSON.stringify(cart))
      alert("El producto fue agregado al carrito")
      router.push("/")
    }
  }
  }
  
  return (
    <>
      
      <h1 className="text-center mt-5 font-bold text-2xl ">Detalle del producto</h1>
          <div className="flex justify-center text-center w-full md:-1/2 space-y-4 mt-5">

              <div className="bg-white rounded-2xl shadow m-6 p-6 flex flex-col gap-4 items-center ">

                  <h2 className='uppercase font-bold ' >{name}</h2>
                  <div className='w-full m-auto flex justify-center'>
                    <img src={image} alt={name} className='max-w-full w-auto h-64 object-contain'/>
                  </div> 

                  <p className='text-sm'>{description}</p>
                  <p className='text-sm'>Precio: ${price}</p>
                  <p className='text-sm'>Stock disponible: {stock}</p>
                  <button onClick={handleAddToCart} className="py-2 px-2 rounded-xl font-medium transition-colors duration-200 w-30 bg-blue-300 text-white hover:bg-blue-400" >Comprar</button>
              </div>
          </div>
      
    </>
  );
};

export default ProductDetail