import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';

const App = () => (
    <div>
        <h1>Product Management System</h1>
        <AddProduct />
        <ProductList />
    </div>
);

export default App;
