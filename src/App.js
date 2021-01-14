import { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { connect } from 'react-redux';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './Components/Dashboard/Dashboard';
import Customer from './Pages/Customer';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Home from './Pages/Home';
import Login from './Pages/Login';

import * as actions from './store/actions/index';

import './App.css';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(',')
    }
});

const App = ({ isAuthenticated, onTryAutoSignin }) => {
    useEffect(() => {
        onTryAutoSignin();
    }, [onTryAutoSignin]);

    let routes = (
        <Switch>
            <Route path="/login" exact component={Login} />
            <Redirect to="/login" />
        </Switch>
    );
    console.log('apprender');
    if (isAuthenticated) {
        routes = (
            <Switch>
                <Dashboard>
                    <Route exact path="/customer" component={Customer} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/" component={Home} />
                    <Redirect to="/" />
                </Dashboard>
            </Switch>
        );
    }

    return (
        <AuthProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>{routes}</ThemeProvider>
            </BrowserRouter>
        </AuthProvider>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.token !== null
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignin: () => dispatch(actions.tryAutoSignin())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
