import React from 'react'

const Product = ({ item, addToCart }) => {
    return (
        <div style={{ width: '19%', border: '1px solid black', borderRadius: 10, padding: 5, marginBottom: 20 }}>
            <img src={item.img} width={'100%'} height={350} style={{ borderRadius: 5, aspectRatio: 9 / 16 }} />
            <div style={{ marginTop: 7 }} />
            <h6 style={{ textAlign: 'center' }}>{item.title}</h6>
            <p style={{ fontSize: 21 }}>₹ {item.price} {'\t'} <span style={{ fontSize: 14, textDecorationLine: 'line-through' }}>₹ {item.mrp}</span></p>
            <div style={{ marginTop: 7 }} />
            <button onClick={() => addToCart(item)} type="button" class="btn btn-warning" style={{ width: '100%' }}>+ Add To Cart</button>
        </div>
    )
}

export default Product