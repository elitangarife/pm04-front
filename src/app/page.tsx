import React from 'react'

import ListProducts from '@/components/card/ProductList'

const Home: React.FC= () => {

  
  
  return (

    <div className='m-auto'>
      
      <h2 className='text-center text-3xl font-bold mt-5 '>Productos</h2>
      <ListProducts/>
     


    </div>
  )
}

export default Home