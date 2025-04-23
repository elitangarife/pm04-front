import { ILoginProps, IRegisterProps } from ".";


const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData: IRegisterProps) {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, message: data.message || "Fallo al registrarse. Intentelo de nuevo" };
    }
  } catch (error) {
    return { success: false, message: "Error inesperado al registrar" };
  }
}


export async function login (userData: ILoginProps) {
    try {
        const response = await fetch(`${APIURL}/users/login`,{
            method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData)
        })
        const data = await response.json();
        
        if (response.ok) {
          return { success: true, data }
        } else {
            return {success: false, message: data.message || "Usuario no registrado"}
        }} 
        catch (error: any) {
          return {success: false, message: "Error inesperado al iniciar sesión"}
        }
      }

