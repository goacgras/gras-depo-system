//npm i @apollo/react-hooks apollo-cache-inmemory apollo-link-http apollo-client graphql

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
