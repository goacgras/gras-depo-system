import { useQuery } from '@apollo/react-hooks';

import { FETCH_PRODUCT_QUERY } from '../util/graphqlQuery';

const Product = () => {
    let products = '';
    const { loading, data } = useQuery(FETCH_PRODUCT_QUERY);

    if (data) {
        products = { data: data.getProducts };
    }
    return (
        <div>
            <h1>Product Lists</h1>
            <hr />
            {loading ? (
                <p>loading</p>
            ) : (
                <ul>
                    {products.data.map((product) => (
                        <li key={product.id}>
                            <h2>Name: {product.name}</h2>
                            <h3>Quantity: {product.quantity}</h3>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Product;
