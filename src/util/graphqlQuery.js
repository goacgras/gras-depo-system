import { gql } from '@apollo/client';

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

export const ADD_CUSTOMER_MUTATION = gql`
    mutation($name: String!) {
        addCustomer(name: $name) {
            id
            name
            createdAt
        }
    }
`;

export const LOGIN_MUTATION = gql`
    mutation($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
        }
    }
`;
