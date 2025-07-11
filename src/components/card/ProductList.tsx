
import Card  from './Card';
import { fetchProducts } from '@/utils/products.helper';



export const ListProducts = async() => { 
  
  const fetchData = await fetchProducts()
    return(
      <>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 p-3 lg:pl-10'>
            {fetchData.map((product) => (
            <Card key={product.id} {...product} />
            ))}
      </div>
      </>
    )
  }

  export default ListProducts
