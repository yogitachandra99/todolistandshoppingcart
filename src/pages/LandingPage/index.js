import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div style={{ height: '100vh' }} className="container-fluid">
            <div style={{ height: '100vh' }} className="row">
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }} className="col-6">
                    <Link to={'/todolist'} style={{ height: '100vh', width: '100%', alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="btn btn-primary btn-lg">To Do List</Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }} className="col-6">
                    <Link to={'/shoppingcart'} style={{ height: '100vh', width: '100%', alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="btn btn-secondary btn-lg">Shopping Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage