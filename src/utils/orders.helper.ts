const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function createOrder (token: string, products: number[]) {
    try {
        const response = await fetch(`${APIURL}/orders`,{
            method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: token
              },
              body: JSON.stringify({products})
        })
        if(response.ok){
            alert("La compra fue realizada con exito")
            alert("Tu pedido estará listo en 2 días")
            return response.json()
        }else {
            alert("Fallo al realizar la compra. Intentelo de nuevo")
            throw new Error ("Fallo del servidor")
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getOrders (token: string) {
    try {
        const response = await fetch(`${APIURL}/users/orders`,{
            method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: token
              }
        })
        return response.json()
        
    } catch (error: any) {
        throw new Error(error)
    }
}