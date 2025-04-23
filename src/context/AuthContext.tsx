'use client'

import { IAuthContextProps, IAuthProviderProps, IUserSession } from "@/utils"
import { useContext, createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'

export const AuthContext = createContext <IAuthContextProps>({
    userData: null, 
    setUserData: () => {}
})

export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
    const [userData, setUserData] = useState<IUserSession | null>(null)

    useEffect (() => {
        const userData = JSON.parse(localStorage.getItem("userSession")!)
        setUserData(userData)
    }, [])

    useEffect(() => {
        if (userData) {
            localStorage.setItem("userSession", JSON.stringify({ token: userData.token, user: userData.user }))
            Cookies.set("userSession", JSON.stringify({ token: userData.token, user: userData.user }))
            
        } else {
            localStorage.removeItem("userSession")
            Cookies.remove("userSession")
        }
    }, [userData])

    
    return (
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)