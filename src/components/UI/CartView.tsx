'use client'

import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/utils";
import { createOrder } from "@/utils/orders.helper";
import Link from "next/link";
import { useEffect, useState } from "react";


const CartView = () => {

  const {userData} = useAuth()
    const [cart, setCart] = useState<IProduct[]>([]);
    const [totalCart, setTotalCart] = useState<number>(0)

    useEffect(() => {

        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

        if (storedCart) {
            let totalCart = 0
            storedCart.map((product: IProduct) => {
            totalCart = totalCart + product.price
            })
            setTotalCart(totalCart)
            setCart(storedCart)
        }
       }, []);
    
    const removeFromCart = (idToRemove: number) => {
        const updatedCart = cart.filter((product) => product.id !== idToRemove);

        const newTotal = updatedCart.reduce((acc, product) => acc + product.price, 0);

        setCart(updatedCart);
        setTotalCart(newTotal);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = async () => {
    if(userData?.token){
      const idProducts = cart.map((product) => product.id)
      await createOrder(userData.token, idProducts)
      localStorage.setItem("cart", "[]")
      setCart([])
      setTotalCart(0)
    }
  }

  const subtotal = totalCart > 0 ? (totalCart) / 1.19 : 0;
  const taxes = totalCart > 0 ? subtotal * 0.19 : 0;
  const total = totalCart > 0 ? totalCart : 0;
  const roundedSubtotal = Math.round(subtotal)
  const roundedTaxes = Math.round(taxes)


  return (

        <div className="p-4 md:min-h-screen ">
            <div className="relative m-2 ">
                <h1 className="text-center text-2xl font-bold ">🛒 Carrito de compras</h1>
                <Link href={"/"} className="inline-block mt-2 md:absolute md:right-0 md:top-0 md:mt-0 py-2 px-3 rounded-xl font-medium transition-colors duration-200 bg-gray-200 text-gray-900 hover:bg-gray-300">Agregar más productos</Link>
                
            </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="cart-item bg-gray-100 p-4 rounded-md shadow-md ">
              <h2 className="text-center text-2xl font-bold mb-5">Productos</h2>
              <div className='grid sm:grid-cols-1 md:grid-cols-2'>
    
              {cart.length === 0 ? (
                <p className="text-lg text-gray-900 mb-4 font-semibold">No hay productos en el carrito.</p>
                
              ) : (
                cart.map((product) => (
                  <div key={product.id} className=" outline-2 outline-gray-600 m-2 p-4 rounded-md border-b py-2 items-center sm:h-auto sm:w-auto  ">
                    <div className="flex flex-wrap justify-around items-center p-4 xl:grid xl:grid-cols-2 gap-4">
                          <div className='xl:flex flex-col items-left justify-center space-x-4'>
                              <p className="text-lg font-semibold text-gray-900 mb-4">{product.name}</p>

                              <p className="text-lg font-semibold text-gray-900 mb-4">${product.price}</p>
                          </div>
    
                          <div className='max-w-xs overflow-hidden m-auto flex justify-center'>
                            <img className='max-w-full h-auto object-cover' src={product.image} alt="" />
                          </div>
                          
                    </div>
                  <button onClick={() => removeFromCart(product.id)} className="py-2 px-2 rounded-xl font-medium transition-colors duration-200 w-30 bg-red-100 text-red-600 hover:bg-red-200 gap-48" >Eliminar</button>
                    
                    
                  </div>
                ))
              )}
              </div>
            </div>
    
            <div className="cart-item bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="text-center text-2xl font-bold mb-5">Resumen del pedido</h2>
    
              <div className="mb-2 flex justify-between">
                <p className="text-lg font-semibold text-gray-900 mb-4">Subtotal:</p>
                <span >${roundedSubtotal}</span>
              </div>

              <div className="mb-2 flex justify-between">
                <p className="text-lg font-semibold text-gray-900 mb-4">Envío Gratis:</p>
                <span>$ 0</span>
              </div>
    
              <div className="mb-2 flex justify-between">
                <p className="text-lg font-semibold text-gray-900 mb-4">Impuestos (19%):</p>
                <span>${roundedTaxes}</span>
              </div>

              <br />
              <div className="mb-2 flex justify-between font-bold border-t pt-2">
                <p>Total:</p>
                <span>${total}</span>
              </div>
              
    
              {cart.length > 0 && (
                <button onClick={handleCheckout} className="py-2 px-2 rounded-xl font-medium transition-colors duration-200 w-30 bg-blue-300 text-white hover:bg-blue-400 p-2 mt-4">💳Adquirir</button>
              )}
            </div>
          </div>
        </div>
      )
    }
    

export default CartView