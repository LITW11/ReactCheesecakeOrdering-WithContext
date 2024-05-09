import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';

const OrderCountContext = createContext();

const OrderCountContextComponent = (props) => {
    const [orderCount, setOrderCount] = useState(0);

    const refreshOrderCount = async () => {
        const { data } = await axios.get('/api/CheesecakeOrdering/getordercount');
        setOrderCount(data.count);
    }

    useEffect(() => {
        refreshOrderCount();
    }, []);

    const obj = {
        orderCount,
        refreshOrderCount,
    }

    return <OrderCountContext.Provider value={obj}>
        {props.children}
    </OrderCountContext.Provider>
}

const useOrderCount = () => {
    return useContext(OrderCountContext);
}

export default OrderCountContextComponent;
export { useOrderCount };