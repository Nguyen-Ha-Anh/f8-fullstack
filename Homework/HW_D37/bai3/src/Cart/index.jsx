import { useCallback, useState } from "react";
import CartItem from "./CartItem";

function CartUI() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Áo thun', quantity: 1 },
    { id: 2, name: 'Quần jeans', quantity: 2 },
    { id: 3, name: 'Nón lưỡi trai', quantity: 1 },
  ]);

  const handleIncrease = useCallback((id) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const handleDecrease = useCallback((id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }, []);

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 20 }}>
      <h2 style={{ textAlign: 'center' }}>🛒 Giỏ hàng</h2>
      {cart.map(item => (
        <CartItem 
        key={item.id} 
        item={item}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onDelete={handleDelete}
        />  
      ))}
    </div>
  );
}

export default CartUI;
