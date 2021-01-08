import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './Components/Dashboard/Dashboard';
import Customer from './Pages/Customer';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Home from './Pages/Home';

import './App.css';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(',')
    }
});

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Dashboard>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/customer" component={Customer} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/product" component={Product} />
                </Dashboard>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
