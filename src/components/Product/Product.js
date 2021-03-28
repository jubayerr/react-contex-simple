import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Product = (props) => {
    const count = useContext(CategoryContext)
    const { name } = props.product

    return (
        <div>
            <h2>This is product {count}</h2>
            <p>Selected categroy {name}</p>
        </div>
    );
};

export default Product;