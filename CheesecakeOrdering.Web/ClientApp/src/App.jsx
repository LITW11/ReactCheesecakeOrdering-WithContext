import React from 'react';
import Layout from './Components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Success from './Pages/Success';
import ViewOrders from './Pages/ViewOrders';
import OrderDetails from './Pages/OrderDetails';
import OrderCountContextComponent from './OrderCountContext';

const App = () => {
    return (
        <OrderCountContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/success' element={<Success />} />
                    <Route path='/view-orders' element={<ViewOrders />} />
                    <Route path='/order-details/:id' element={<OrderDetails />} />
                </Routes>
            </Layout>
        </OrderCountContextComponent>
    )
}

export default App;