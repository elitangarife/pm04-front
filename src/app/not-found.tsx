import Link from "next/link"

const PageNotFound = () => {
  return (
    <div className="flex justify-center text-center">
      <div className="flex flex-col items-center pt-40 m-8 rounded-2xl w-120 h-120 border border-indigo-600">
          <h2 className=' text-5xl uppercase font-bold'>Página no encontrada</h2>
          
          <br />
          <Link className="py-2 px-2 rounded-xl font-medium transition-colors duration-200 w-30 underline hover:underline"  href="/">Regresar a Home</Link>
      </div>
    </div>
  )
}
export default PageNotFound