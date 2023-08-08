import axios from "axios";
import { createContext, useState } from "react";

const UserContext = createContext()

export function UserProvider({children}) {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        roles: []
    })
    const getUserDetails = async() => {
        const token = localStorage.getItem('token')
        
        try {
            await axios.get('http://localhost:8000/api/customer-details', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                const data = response.data
                setUser({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    roles: data.roles
                })
            })
        } catch (error) {
            console.log(error);
        }
    }

    const contextValue = {
        getUserDetails,
        user
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;