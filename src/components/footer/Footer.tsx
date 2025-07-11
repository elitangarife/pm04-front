import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    
    <div className='mt-10 bg-gray-100 p-6 rounded-lg shadow-lg'>

      <h2 className="text-center font-bold text-lg ">TuTiendaApple</h2>
      <p className="text-center mt-2 ">Tu tienda en línea de productos Apple.</p>
      <p className="text-center mt-2 mb-10">Compra en línea, envío rápido y seguro.</p>

      
    <div className='my-5 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

            <div>
                    <h4 className='font-bold text-center'>Enlaces rápidos</h4>
                    <div className='mt-4 space-y-2 text-center'>
                        <Link className='hover:text-gray-400 transition duration-300 ' href="/about" >Sobre nosotros</Link><br />
                        <Link className='hover:text-gray-400 transition duration-300 ' href="/" >Inicio</Link>
                    </div>
            </div>

            <div className='text-center space-y-2'>
              <h4 className='font-bold'>Contacto</h4>
              <span className='block mt-2'>📍 Dirección: Calle Ficticia 123</span>
              <span>Bogotá, Colombia</span>
              <span className='block mt-2'>📞 Teléfono: +57 1 234 5678</span>
              <span className='block mt-2'>📧 Email: contacto@tutiendaapple.co</span>
            </div>

            <div>
                    <h4 className='font-bold text-center'>Síguenos</h4>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a  href="https://facebook.com/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Facebook" className='w-6 h-6 hover:scale-110'/>
                        </a>

                        <a className='aria-label' href="https://instagram.com/">
                            <img src="https://images.vexels.com/media/users/3/137380/isolated/lists/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-de-icono-de-instagram.png" alt="Instagram" className='w-6 h-6 hover:scale-110'/>
                        </a>

                        <a href="https://twitter.com/" >
                            <img src="https://img.freepik.com/vector-premium/vector-logotipo-aplicacion-x-twitter_798572-316.jpg?semt=ais_hybrid&w=740" alt="Twitter" className='w-6 h-6 hover:scale-110'/>
                        </a>
                    </div>
              </div>

    </div>
      <p className='text-center'>© 2025 TuTiendaApple. Todos los derechos reservados.</p>

    </div>
    </>
  )
}

export default Footer