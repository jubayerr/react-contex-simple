import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import Product from '../Product/Product';

const allItems = [
    { name: 'Lenevo', category: 'laptop' },
    { name: 'Asus', category: 'laptop' },
    { name: 'Dell', category: 'laptop' },
    { name: 'Samsung', category: 'mobile' },
    { name: 'Nokia', category: 'mobile' },
    { name: 'Apple', category: 'mobile' },
    { name: 'Canon', category: 'camera' },
    { name: 'Nikkon', category: 'camera' },
    { name: 'Sony', category: 'camera' }
]

const Categories = () => {
    const count = useContext(CategoryContext)
    const [items, setItems] = useState([])
    useEffect(() => {
        const matchedProducts = allItems.filter(item => item.count === count && count.toLowerCase())
        setItems(matchedProducts)
    }, [count])
    return (
        <div>
            <h2>Categories {count}</h2>
            {
                items.map(pd => <Product product={pd}></Product>)
            }
        </div>
    );
};

export default Categories;