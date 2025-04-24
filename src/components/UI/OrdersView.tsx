'use client'


import { useAuth } from '@/context/AuthContext'
import { IOrder } from '@/utils'
import { getOrders } from '@/utils/orders.helper'
import React, { useEffect, useState } from 'react'

const OrdersView = () => {
    const {userData} = useAuth()
    const [orders, setOrders] = useState<IOrder[]>([])

    const handleGetOrders = async () => {
        if(userData?.token){
            const response = await getOrders(userData.token)
            setOrders(response)
        }
    }
    useEffect (() => {
        handleGetOrders()
    }, [userData])

    



  return (
    <div className="flex-grow flex flex-col">
        <h1 className="text-center text-3xl font-bold mt-5 ">Mis compras</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4 border-gray-200 m-5 border-2 bg-gray-100 rounded-md shadow-md flex-grow">

            {orders.length ?
            orders.map((order) => {
                
                const totalOrder = order.products.reduce((acc, product) => acc + product.price, 0)

                return (
                    <div key={order.id} className=" outline-2 outline-gray-600 m-2 p-4 rounded-md border-b py-2 items-center sm:h-auto sm:w-auto ">
                        <p className="text-lg font-semibold text-gray-900 mb-4 text-center">Orden N.°:  {order.id}</p>
                        <p className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">Estado de la orden:<span className="text-green-600 font-semibold"> {order.status === "approved" ? "Aprobado" : "Pendiente"}</span></p>
                        <p className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">Total de la orden:<span className="font-normal">${totalOrder.toFixed(0)}</span></p>
                        <p className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">Día de compra: <span className="font-normal">{new Date(order.date).toLocaleDateString()}</span></p>
                        <p className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">Hora de compra: <span className="font-normal">{new Date(order.date).toLocaleTimeString()}</span></p>
                        
                        <p className="text-lg font-semibold text-gray-900 mb-4">Productos comprados:</p>

                        {
                            order.products.map((product) =>{
                                return (
                                    <div key={product.id}>
                                        <p>{product.name}</p>
                                    </div>
                                )
                            })
                        }
                        
                        
                        

                    </div>
                )
            }) :(
                <div className='text-center w-full py-20 text-gray-500 p-4 md:min-h-screen' >No tienes ordenes realizadas</div>
            )
            }
        </div>
    </div>
  )
}

export default OrdersView