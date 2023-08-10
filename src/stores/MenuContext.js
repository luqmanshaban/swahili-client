import axios from "axios";
import React, { createContext, useMemo, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState({});
  const [toggleCart, setToggleCart] = useState(false);

  const handleAdd = (foodName) =>
    setItemCount((prev) => ({
      ...prev,
      [foodName]: (prev[foodName] || 0) + 1,
    }));

  const handleMinus = (foodName) =>
    setItemCount((prev) => ({
      ...prev,
      [foodName]: (prev[foodName] || 0) - 1,
    }));

  const addToCart = (name, price, img, itemQuantity) => {
    setItems((prev) => [...prev, { name, price, img, itemQuantity }]);
  };

  const removeFromCart = (name) =>
    setItems((prev) => prev.filter((item) => item.name !== name));

  const count = items.length;

  const total = useMemo(() => {
    return items.reduce(
      (acc, item) => acc + item.price * (itemCount[item.name] || 1),
      0
    );
  }, [itemCount, items]);

  // ... (imports and other code)

const checkOut = async () => {
  try {
    const token = localStorage.getItem("token");

    const orders = items.map((item) => ({
      name: item.name,
      img: item.img,
      quantity: itemCount[item.name] || 1,
      total: item.price * (itemCount[item.name] || 1),
    }));

    console.log(orders);

    await axios.post(
      "http://localhost:8000/api/orders",
      { orders }, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(response => {
      console.log(response);
      if(response.status === 201){
        alert('ORDER CREATED')
      }
    });
    setItemCount({})
    setItems([])

    console.log("Order placed successfully!");
  } catch (error) {
    console.log(error);
  } finally {
  }
};


  const toggleCartComponent = () => setToggleCart(!toggleCart);
  const unToggleCartComponent = () => setToggleCart(false);

  const contextValue = {
    items,
    handleAdd,
    handleMinus,
    count,
    total,
    addToCart,
    removeFromCart,
    itemCount,
    toggleCart,
    toggleCartComponent,
    unToggleCartComponent,
    checkOut,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  );
}
