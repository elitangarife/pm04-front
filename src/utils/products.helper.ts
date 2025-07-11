import products from "@/helpers/products"
import { IProduct } from "."

const APIURL = process.env.NEXT_PUBLIC_API_URL

const mockProducts = products


export async function fetchProducts () {
    try {
        const data = await fetch(`${APIURL}/products`)

        if(!data.ok) {
            return mockProducts
        }
        const products: IProduct[] = await data.json()
        return products

    } catch (error: any) {
        return mockProducts
    }
}

export async function fetchProductDetail (id:string): Promise<IProduct> {
    try {
        const data = await fetchProducts()
        const productById = await data.find((product) => product.id.toString() === id)
        if (!productById) throw new Error('Producto no encontrado')
                
        return productById

        } catch (error: any) {
            
            if (error instanceof Error) {
                throw new Error(error.message || 'Hubo un problema al obtener el producto');
            } else {
                throw new Error('Hubo un problema al obtener el producto')
            }
        }
    }
   



export async function getProductsByCategoryOrName(categoryIdOrName: string) {
  try {
    const data = await fetchProducts()

    const isNumber = !isNaN(Number(categoryIdOrName))
    let filteredProducts: IProduct[] = []

    if (isNumber) {
      
      filteredProducts = data.filter(
        (product) => product.categoryId.toString() === categoryIdOrName
      )
    } else {
      
      filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(categoryIdOrName.toLowerCase())
      )
    }

    return filteredProducts
  } catch (error: any) {
    throw new Error('Error al filtrar productos')
  }
}

