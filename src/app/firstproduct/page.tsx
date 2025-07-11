import { fetchProducts } from '@/utils/products.helper'
import React from 'react'

const firstProduct = async () => {
    const data = await fetchProducts()
  return (
    <div>

        <p>{data[0].name}</p>

    </div>
  )
}

export default firstProduct