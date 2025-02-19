import React from 'react';
import { Link } from 'react-router-dom';
import { useOrderCount } from '../OrderCountContext';

const Layout = (props) => {

    const { orderCount } = useOrderCount();

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">Cheesecake Ordering</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className='nav-link text-light'>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/order' className='nav-link text-light'>
                                        Order
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/view-orders' className='nav-link text-light'>
                                        View Orders
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <span style={{ color: 'white', fontSize: 25, marginLeft: 40 }}>Order Count: {orderCount}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container" style={{ marginTop: 80 }}>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;