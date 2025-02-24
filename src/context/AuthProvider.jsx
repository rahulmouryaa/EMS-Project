import { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../pages/utils/localStorage";
import { useEffect } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => { 
    //localStorage.clear()
    
    const[userData, setUserData] = useState(null)

    useEffect(()=>{
        setLocalStorage()
        const{employees} = getLocalStorage()
        setUserData(employees)
    },[])

    return (
        <AuthContext.Provider value={[userData,setUserData]}>  
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
