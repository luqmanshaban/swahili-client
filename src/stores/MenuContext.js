import { createContext, useMemo, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({children}) {
    const [items, setItems] = useState([])
    const [itemCount, setItemCount] = useState({})

    const handleAdd = foodName => setItemCount(prev => ({
        ...prev,
        [foodName]: (prev[foodName] || 0 ) + 1
    }))
    
    const handleMinus = foodName => setItemCount(prev => ({
        ...prev,
        [foodName]: (prev[foodName] || 0) - 1
    }))

    const addToCart = (name, price, img) => {
        setItems(prev => [
            ...prev,
            {name, price, img}
        ])
    }

    const removeFromCart = name => setItems(prev => prev.filter(item => item.name !== name))

    const count = items.length;

    const total = useMemo(() => {
        return items.reduce((acc, item) => acc + item.price * (itemCount[item.name] || 1), 0)
    },[itemCount, items])

    const contextValue = { items, handleAdd, handleMinus, count, total, addToCart, removeFromCart, itemCount}
    
    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    )
}
