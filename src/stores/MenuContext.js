import axios from "axios";
import React, { createContext, useEffect, useMemo, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState({});
  const [toggleCart, setToggleCart] = useState(false);
  const [activeOrders, setActiveOrders] = useState([])
  const [completedOrders, setCompletedOrders] = useState([])
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(Boolean)
  const [paymentID, setPaymentID] = useState('')
  const [paymentProcessing, setPaymentProcessing] = useState(Boolean)
  // const [orderCreated, setOrderCreated] = useState(false)

  const handleAdd = (foodName) =>
    setItemCount((prev) => ({
      ...prev,
      [foodName]: (prev[foodName] || 0) + 1,
    }));

  const handleMinus = (foodName) =>
    setItemCount((prev) => ({
      ...prev,
      [foodName]: (prev[foodName] || 0) -1,
    }));

  const addToCart = (name, price, img, itemQuantity) => {
    setItems((prev) => [...prev, { name, price, img, itemQuantity }]);
  };

  const removeFromCart = (name) => setItems((prev) => prev.filter((item) => item.name !== name));

  const count = items.length;

  const total = useMemo(() => {
    return items.reduce(
      (acc, item) => acc + item.price * (itemCount[item.name] || 1),
      0
    );
  }, [itemCount, items]);

  async function pay() {
    try {
      const token = localStorage.getItem('token');
      const amount = items.map(item => item.price * (itemCount[item.name] || 1));
      const requestBody = { amount: amount[0] };
  
      // First axios request to create payment
      await axios.post('http://localhost:4000/create-payment', requestBody, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        
        console.log(response.data);
        window.open(response.data.link);
      });
  
    } catch (error) {
      console.log(error);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function checkIfPaid() {
    try {
      await axios.get('http://localhost:4000/transactionID').then(response => {
        if(response.data.id !== ''){
          setPaymentID(response.data.id)
          console.log(response);
          console.log(paymentID);
          setIsPaymentSuccessful(true)
          console.log(isPaymentSuccessful);
        }
        else {
          console.log('Payment unsuccessfull');
        }
      })
    } catch (error) {
      console.error(error);
    }
  }


  async function createOrder() {
    try {
      const token = localStorage.getItem('token')
      const orders = items.map((item) => ({
        name: item.name,
        img: item.img,
        quantity: itemCount[item.name] || 1,
        total: item.price * (itemCount[item.name] || 1),
        payment_id: paymentID
      }));
      

      console.log(orders);
      if(isPaymentSuccessful === true){
        const orderResponse = await axios.post(
          "http://localhost:8000/api/orders",
          { orders }, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
  
        if (orderResponse.status === 201) {
          alert('ORDER CREATED');
          // setOrderCreated(true)
          setIsPaymentSuccessful(false)
          setPaymentProcessing(true)
        }
  
        setItemCount({});
        setItems([]);
  
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfPaid()
    // createOrder()
  })

  if(isPaymentSuccessful){
    createOrder()
    // setIsPaymentSuccessful(false)
  }

  const checkOut = async () => {
    await pay();
    setPaymentProcessing(true)
  };
  

const getActiveOrders = () => {
  const token = localStorage.getItem('token')

  try {
    axios.get('http://localhost:8000/api/user-orders', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setActiveOrders(response.data.orders)
    })
  } catch (error) {
    console.error(error);
  }
}
const getCompletedOrders = () => {
  const token = localStorage.getItem('token')

  try {
    axios.get('http://localhost:8000/api/order-history/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setCompletedOrders(response.data.orders)
    })
  } catch (error) {
    console.error(error);
  }
}
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
    activeOrders,
    getActiveOrders,    
    completedOrders,
    getCompletedOrders,
    paymentProcessing
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  );
}
