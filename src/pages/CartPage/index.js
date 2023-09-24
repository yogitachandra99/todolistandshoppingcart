import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const CartPage = () => {
    const location = useLocation()
    const [cart, setCart] = useState(location?.state?.item)
    const removeFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
    };
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div style={{ padding: 20 }}>
            <div className='row' style={{ marginBottom: 40 }}>
                <div className='col-8'>
                    <h1>Shopping Cart</h1>
                </div>
                <div className='col-2'>
                    <h4>Total Items: {cart.length}</h4>
                </div>
                <div className='col-2'>
                    <h4>Subtotal: ₹ {subtotal}</h4>
                </div>
            </div>
            {cart.map((item) => (
                <div style={{ marginBottom: 10, border: '1px solid black', borderRadius: 10, padding: 10, width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '17%' }}>
                        <img src={item.img} width={'100%'} height={330} />
                    </div>
                    <div style={{ width: '5%', }}></div>
                    <div style={{ width: '78%', paddingTop: 20, paddingBottom: 20 }}>
                        <h4>{item.title}</h4>
                        <span style={{ fontSize: 21, fontWeight: "bold" }}>₹ {item.price} <span style={{ textDecorationLine: 'line-through', fontSize: 14 }}>₹ {item.mrp}</span></span>
                        <div>
                            <button type="button" class="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartPage