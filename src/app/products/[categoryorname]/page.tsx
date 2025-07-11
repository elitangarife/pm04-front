import Card from '@/components/card/Card';
import categoriesToPreLoad from '@/helpers/categories';
import { getProductsByCategoryOrName } from '@/utils/products.helper';
import Link from 'next/link';
import React from 'react'

const CategoryIdOrName = async ({ params }: { params: Promise< { categoryorname: string } >}) => {

    const { categoryorname } = await params;

    const  products = await getProductsByCategoryOrName(categoryorname)

    let displayName = categoryorname
    const categoryFromId = categoriesToPreLoad.find(cat =>
    cat.id === Number(categoryorname)
  )

  if (categoryFromId) {
    displayName = categoryFromId.name
  }

  return (
    <div className='min-h-screen m-auto'>
        <p className="text-center text-2xl font-bold mt-8">Resultados de tu búsqueda: <span className="text-3xl font-normal">{displayName}</span></p>
   
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 p-3 lg:pl-10 '>
                
                {
                products.length ?
                    (products.map((product) => {
                        
                        return(
                            <Link key={product.id} href={`/product/${product.id}`}>
                                <Card key={product.id} {...product} />
                            </Link>
                        )
                    })) : (
                        <div className="col-span-full flex justify-center items-center mt-20">
                            <div className='bg-white rounded-2xl shadow p-6 flex justify-center items-center'>
                                <p className=" text-center text-lg text-gray-900 font-semibold">No se encontraron productos</p>
                                
                            </div>
                        </div>
                    )
                }
            </div>
    </div>
  )
}

export default CategoryIdOrName