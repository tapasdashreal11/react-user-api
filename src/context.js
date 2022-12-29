import React, { useEffect, useState } from "react";
import axios from "axios";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const url = "http://localhost:5000/api";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  const login = async (formData) => {
    try {
      const { email, password } = formData;
      const { name, token } = await axios.post(url, { email, password });

      token && setUserData({ email, name });
      localStorage.setItem("token", token);
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = (item) => {
    setUserData((prevUsers) => [...pre, item]);
  };

  const removeFromCart = (id) =>
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== id)
    );

  console.log({ cartItems });
  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
