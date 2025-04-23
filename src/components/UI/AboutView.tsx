import React from 'react'

const AboutView = () => {
  return (
    <div className="flex items-center justify-center md:min-h-screen">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-center text-3xl font-bold mt-5  mb-4">Sobre Nosotros</h2>

        <div className="max-w-2xl gap-4 p-4 border-gray-200 m-5 border-2 bg-gray-100 rounded-md shadow-md text-justify">
          <p>
            En <strong>TuTiendaApple</strong>, creemos en la simplicidad, la innovación y la excelencia. 
            Somos una tienda especializada en productos Apple cuidadosamente seleccionados para ofrecerte 
            lo último en tecnología con una experiencia de compra fluida, segura y elegante.
          </p>
          <p className="mt-4">
            Nos apasiona ayudarte a descubrir el dispositivo perfecto para tu día a día. Ya sea un iPhone, 
            MacBook o accesorio, cada producto está respaldado por nuestro compromiso con la calidad, 
            el diseño y el soporte personalizado.
          </p>
        </div>
        <div className="flex justify-center">
          <img className="max-w-4xl w-full h-auto" src="https://pedidos.com/myfotos/pedidos-com/pagina/apple/principal.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutView