import axios from "axios";
import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [activeOrders, setActiveOrders] = useState([]);
    const [canceledOrders, setCancelledOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);
    const [allOrders, setAllOrders] = useState([]);

    const token = localStorage.getItem('token')

    const toggleActiveOrders = async() => {
        await axios.get('http://localhost:8080/api/admin-orders', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            console.log(response);
            setActiveOrders(response.data.orders)
        })
    }
    const toggleCanceledOrders = async() => {
        await axios.get('http://localhost:8080/api/admin-orders', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            console.log(response);
            setCancelledOrders(response.data.orders)
        })
    }
    const toggleCompletedOrders = async() => {
        await axios.get('http://localhost:8080/api/admin-orders', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            console.log(response);
            setCompletedOrders(response.data.orders)
        })
    }
    const toggleAllOrders = async() => {
        await axios.get('http://localhost:8080/api/admin-orders', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setAllOrders(response.data.orders)
        })
    }


    const contextValue = {
        activeOrders, 
        setActiveOrders,
        canceledOrders,
        setCancelledOrders,
        completedOrders,
        setCompletedOrders,
        allOrders,
        setAllOrders,
        toggleActiveOrders,
        toggleCanceledOrders,
        toggleCompletedOrders,
        toggleAllOrders
    }

    return (
        <OrderContext.Provider value={contextValue}>
            {children}
        </OrderContext.Provider>
    )
}
