//npm i @apollo/react-hooks apollo-cache-inmemory apollo-link-http apollo-client graphql
//OR JUST INSTALL '@apollo/client graphql'

import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloProvider
} from '@apollo/client';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import authReducer from './store/reducers/auth';

import App from './App';

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache,
    connectToDevTools: true
});

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;
const store = createStore(
    authReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>
);
