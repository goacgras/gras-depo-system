import { useQuery } from '@apollo/client';

import { FETCH_ORDER_QUERY } from '../util/graphqlQuery';

const Order = () => {
    let orders = '';
    const { data, loading } = useQuery(FETCH_ORDER_QUERY);

    if (data) {
        orders = { data: data.getOrders };
    }

    return (
        <div>
            <h1>Order Lists</h1>
            <hr />
            {loading ? (
                <p>Loading</p>
            ) : (
                <ul>
                    {orders.data?.map((order) => (
                        <li key={order.id}>
                            <h2>Product: {order.product.name}</h2>
                            <h3>Quantity: {order.quantity}</h3>
                            <h3>Customer: {order.customer.name}</h3>
                            <h3>Status: {order.status}</h3>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Order;
