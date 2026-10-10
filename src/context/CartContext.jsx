import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("mushadOrders");

    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // =========================
  // BUY NOW
  // =========================

  const buyNow = (product) => {
    setCart([
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  // =========================
  // REMOVE FROM CART
  // =========================

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  };

  // =========================
  // UPDATE QUANTITY
  // =========================

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  // =========================
  // CLEAR CART
  // =========================

  const clearCart = () => {
    setCart([]);
  };

  // =========================
  // ADD ORDER
  // =========================

  const addOrder = (order) => {
    setOrders((currentOrders) => {
      const updatedOrders = [
        order,
        ...currentOrders,
      ];

      localStorage.setItem(
        "mushadOrders",
        JSON.stringify(updatedOrders)
      );

      return updatedOrders;
    });
  };

  // =========================
  // UPDATE ORDER STATUS
  // =========================

  const updateOrderStatus = (
    orderId,
    newStatus
  ) => {
    setOrders((currentOrders) => {
      const updatedOrders =
        currentOrders.map((order) =>
          order.orderId === orderId
            ? {
                ...order,
                status: newStatus,
              }
            : order
        );

      localStorage.setItem(
        "mushadOrders",
        JSON.stringify(updatedOrders)
      );

      return updatedOrders;
    });
  };

  // =========================
  // REQUEST CANCELLATION
  // =========================

  const requestCancellation = (orderId) => {
    setOrders((currentOrders) => {
      const updatedOrders =
        currentOrders.map((order) =>
          order.orderId === orderId
            ? {
                ...order,
                cancellationRequested: true,
                cancellationStatus: "Pending",
              }
            : order
        );

      localStorage.setItem(
        "mushadOrders",
        JSON.stringify(updatedOrders)
      );

      return updatedOrders;
    });
  };

  // =========================
  // REMOVE ORDER
  // =========================

  const removeOrder = (orderId) => {
    setOrders((currentOrders) => {
      const updatedOrders =
        currentOrders.filter(
          (order) =>
            order.orderId !== orderId
        );

      localStorage.setItem(
        "mushadOrders",
        JSON.stringify(updatedOrders)
      );

      return updatedOrders;
    });
  };

  // =========================
  // CART COUNT
  // =========================

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // =========================
  // CART TOTAL
  // =========================

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        // Cart
        cart,
        addToCart,
        buyNow,
        removeFromCart,
        updateQuantity,
        clearCart,

        // Orders
        orders,
        addOrder,
        updateOrderStatus,
        requestCancellation,
        removeOrder,

        // Calculations
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}