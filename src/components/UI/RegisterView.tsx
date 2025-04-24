'use client'

import { register } from "@/utils/auth.helper"
import { validateSchemaRegister } from "@/utils/validate"
import {ErrorMessage, Field, Form, Formik} from "formik"
import { useRouter } from "next/navigation"
import Link from "next/link"
import toast from "react-hot-toast"

const RegisterView = () => {
    const router = useRouter();
  return (
    <div className="bg-white rounded-2xl shadow m-6 p-6 space-y-4">

        <h1 className="text-center mt-5 font-bold text-4xl">Crear una cuenta</h1>


        <Formik
        initialValues={{ email: '', password: '', name: '', address: '', phone: '' }}
        validationSchema={validateSchemaRegister}
        onSubmit={async (values, { resetForm }) => {
            const result = await register(values)
            if(result.success){
            resetForm()
            toast.success("Usuario registrado con exito")
            router.push("/login")
          }else {
            toast.error(result.message === "User already exists" ? "Este usuario ya existe" : result.message)
            router.push("login")
            }
          
        }}
        >
        {({errors}) => (
        
            <Form className="flex justify-center text-center w-full md:-1/2 space-y-4 mt-5">
                <div className=" flex flex-col gap-4 items-center ">
                    <label className='uppercase font-bold '>Nombre: </label>
                    <Field className="bg-gray-200 rounded-2xl pl-3 p-2 w-full" placeholder="Tu nombre" type="text" name="name" />
                    <ErrorMessage className="text-red-600 text-sm" name="name" component="div" />
                      
                    <label className='uppercase font-bold '>Email: </label>
                    <Field className="bg-gray-200 rounded-2xl pl-3 p-2 w-full" placeholder="example@mail.com" type="email" name="email" />
                    <ErrorMessage className="text-red-600 text-sm" name="email" component="div" />    

                    <label className='uppercase font-bold '>Contraseña: </label>
                    <Field className="bg-gray-200 rounded-2xl pl-3 p-2 w-full" placeholder="********" type="password" name="password" />
                    <ErrorMessage className="text-red-600 text-sm" name="password" component="div" />

                    <label className='uppercase font-bold '>Dirección: </label>
                    <Field className="bg-gray-200 rounded-2xl pl-3 p-2 w-full" placeholder="Tu dirección" type="text" name="address" />
                    <ErrorMessage className="text-red-600 text-sm" name="address" component="div" />  

                    <label className='uppercase font-bold '>Teléfono: </label>
                    <Field className="bg-gray-200 rounded-2xl pl-3 p-2 w-full" placeholder="123 456 78 90" type="text" name="phone" />
                    <ErrorMessage className="text-red-600 text-sm" name="phone" component="div" />  

                    <button className='py-2 px-2 rounded-xl font-medium transition-colors duration-200 w-30 bg-blue-300 text-white hover:bg-blue-400'  type="submit" disabled={errors.email || errors.password || errors.name || errors.address || errors.phone ? true : false} >Enviar</button>
                    
                    <p>¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link></p>
                </div>
            </Form>
    )}
        </Formik>
  </div>
  )
}

export default RegisterView