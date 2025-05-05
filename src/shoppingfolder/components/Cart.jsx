import React from 'react';

const Cart = ({ cartItems }) => {
    // Calculate the total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.price} INR
                                {item.quantity ? ` (x${item.quantity})` : ''}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: {totalPrice} INR</h3>
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;