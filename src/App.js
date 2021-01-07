import { BrowserRouter, Route } from 'react-router-dom';

import Customer from './Pages/Customer';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Home from './Pages/Home';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/customer" component={Customer} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/product" component={Product} />
        </BrowserRouter>
    );
}

export default App;
