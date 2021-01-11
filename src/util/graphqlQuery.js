import gql from 'graphql-tag';

export const FETCH_CUSTOMER_QUERY = gql`
    {
        getCustomers {
            id
            name
            createdAt
        }
    }
`;
export const FETCH_ORDER_QUERY = gql`
    {
        getOrders {
            id
            quantity
            status
            product {
                id
                name
            }
            customer {
                id
                name
            }
        }
    }
`;
export const FETCH_PRODUCT_QUERY = gql`
    {
        getProducts {
            id
            name
            quantity
            createdAt
        }
    }
`;
