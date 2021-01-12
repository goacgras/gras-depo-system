import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './Components/Dashboard/Dashboard';
import Customer from './Pages/Customer';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Home from './Pages/Home';
import Login from './Pages/Login';

import './App.css';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(',')
    }
});

let routes = (
    <Switch>
        <Route path="/" exact component={Login} />
        <Redirect to="/" />
    </Switch>
);

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {routes}
                {/* <Dashboard>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/customer" component={Customer} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/product" component={Product} />
                </Dashboard> */}
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
