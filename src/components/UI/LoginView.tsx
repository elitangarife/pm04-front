'use client'
import { useAuth } from "@/context/AuthContext";
import { validateSchemaLogin } from "@/utils/validate"
import {ErrorMessage, Field, Form, Formik} from "formik"
import { useRouter } from "next/navigation";
import Link from "next/link"
import { login } from "@/utils/auth.helper";
import toast from "react-hot-toast";



const LoginView = () => {

  const {setUserData} = useAuth()
  const router = useRouter();
  
  

  return (
    <div className="bg-white rounded-2xl shadow m-6 p-6 space-y-4 ">
        <h1 className="text-center mt-5 font-bold text-4xl">Accede a tu cuenta</h1>
        <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validateSchemaLogin}
        onSubmit={async(values, { resetForm }) => {
          const response = await login(values)
          if (response.success) {
            const { token, user } = response.data;
            setUserData({ token, user });
            resetForm();
            toast.success("Usuario logueado con exito")
            router.push("/");
          } else {
            toast.error(response.message);
          }
        }}
        >
    {({ isValid, dirty }) => (

    
            <Form className="flex justify-center text-center w-full md:-1/2  mt-5">
              <div className=" flex flex-col gap-4 items-center ">
                <label className='uppercase font-bold ' >Email: </label>
                <Field  className="bg-gray-200 rounded-2xl p-2 pl-3 w-full" placeholder="ejemplo@mail.com" type="email" name="email" />
                <ErrorMessage className="text-red-600 text-sm" name="email" component="div" />    

                <label className='uppercase font-bold ' >Contraseña: </label>
                <Field  className="bg-gray-200 rounded-2xl pl-3 p-2 w-full" placeholder="********" type="password" name="password" />
                <ErrorMessage className="text-red-600 text-sm"  name="password" component="div" />

                <button
                className="py-2 px-2 rounded-xl font-medium transition-colors duration-200 w-30 bg-blue-300 text-white hover:bg-blue-400"
                type="submit"
                disabled={!(isValid && dirty)}
              >
                Enviar
              </button>
                
                <p>¿No tienes una cuenta? <Link href="/register">Regístrate</Link></p>
                </div>
                </Form>
    )}
        </Formik>
  </div>
  )
}

export default LoginView