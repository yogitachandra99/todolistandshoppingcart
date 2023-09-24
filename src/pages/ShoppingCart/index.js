import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from './Component/Product';

const ShoppingCart = () => {
    const [productList, setProductList] = useState([]);
    const [load, setLoad] = useState(true)
    const HANDLE_PRODUCT_LIST = async () => {
        try {
            const REQ = await fetch(`https://yogitachandra99.github.io/GlobalShoppingApi/product.json`)
            const RES = await REQ.json();
            console.log(RES)
            setProductList(RES.products)
            setLoad(false)
        } catch (error) {
            console.log(error)
            console.log("SOMETHING WENT WRONG")
            setLoad(false)
        }
    }

    useEffect(() => {
        HANDLE_PRODUCT_LIST();
    }, [])

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
    };

    console.log(cart)

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <span style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 22 }}>Shopping Cart</span>
                    <Link to={'/'} type="button" class="btn btn-light">HOME</Link>
                </div>
            </nav>
            <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Link to={'/cartPage'} state={{
                    item: cart
                }} type="button" class="btn btn-secondary">Cart {`(${cart?.length})`}</Link>
            </div>
            {
                load ?
                    <span>Loading......</span>
                    :
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', flexWrap: 'wrap', paddingRight: 10, paddingLeft: 10, justifyContent: 'space-between' }}>
                        {
                            productList?.map((item, index) => {
                                return (
                                    <Product item={item} addToCart={addToCart} />
                                )
                            })
                        }
                    </div>
            }

            <div style={{ backgroundColor: '#212529', padding: 15, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <span style={{ color: '#FFF', textAlign: 'center' }}>@Shopping Cart</span>
            </div>
        </div>
    )
}

export default ShoppingCart