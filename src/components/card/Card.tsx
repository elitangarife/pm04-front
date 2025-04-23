import {IProduct} from "../../utils/index";
import Link from "next/link";

const Card: React.FC <IProduct> = ({id, name, price,image}) => {

  return (
    <div className="flex justify-center text-center w-full p-4 sm:w-72 md:w-80 lg:w-96">

        <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200 sm:w-72 md:w-80 lg:w-96 h-120 items-center">      
            <h2 className='text-lg font-semibold text-gray-900 mb-4'>{name}</h2>
              
            <div className='max-w-xs overflow-hidden m-auto flex justify-center '>
                <img src={image} alt={name} className='max-w-full h-auto object-cover'></img>
            </div>

                <p className="text-sm text-gray-500">Codigo del producto: {id}</p>
                
              {price &&<p className="text-sm text-gray-500">$ {price}</p>}           
   
            <Link href={`/product/${id}`} className="py-2 px-2 rounded-xl font-medium transition-colors duration-200 w-30 bg-gray-200 text-gray-900 hover:bg-gray-300" >Ver detalles</Link>

        </div>
    </div>
  )
}

export default Card