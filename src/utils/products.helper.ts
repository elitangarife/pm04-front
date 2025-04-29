import { IProduct } from "."

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function fetchProducts () {
    try {
        const data = await fetch(`${APIURL}/products`)
        const products: IProduct[] = await data.json()
        return products

    } catch (error: any) {
        throw new Error(error)
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
   



export async function getProductsByCategoryOrName (categoryIdOrName: string) {
    try {
        const data = await fetchProducts()

        //Filtro searchbar por nombre
        let productFiltered = data.filter((product) => product.name.toString() === categoryIdOrName)

        //Filtro subnavbar por categoriaId
        if(!productFiltered.length){
            productFiltered = data.filter((product) => product.name.toLocaleLowerCase().includes(categoryIdOrName.toLocaleLowerCase()))

            if(!productFiltered.length){
                productFiltered = []
            }
        }
        return productFiltered
    } catch (error: any) {
        throw new Error(error)
        
    }
}
