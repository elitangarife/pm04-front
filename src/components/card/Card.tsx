import {IProduct} from "../../utils/index";
import Link from "next/link";

const Card: React.FC <IProduct> = ({id, name, price,image}) => {

  return (
    <div className="flex justify-center text-center p-4 sm:w-72 md:w-40 lg:w-56">

        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between gap-2 hover:shadow-md hover:scale-105 transition-shadow duration-200 sm:w-72 md:w-80 lg:w-96 h-80 items-center">
          <div className="flex flex-col items-center flex-grow">
            <h2 className='text-lg font-semibold text-gray-900 '>{name}</h2>
              
            <div className='w-40 h-40 overflow-hidden  flex justify-center '>
                <img src={image} alt={name} className='max-w-full h-auto object-cover'></img>
            </div>

               
              {price &&<p className="text-sm text-gray-600">$ {price}</p>}
          </div>
   
            <Link href={`/product/${id}`} className="py-2 px-2 rounded-xl font-medium transition-colors duration-200 w-30 bg-gray-200 text-gray-900 hover:bg-gray-300" >Ver detalles</Link>

        </div>
    </div>
  )
}

export default Card