import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const count = useContext(CategoryContext)
    return (
        <div style={{ border: '1px solid lightgray' }}>
            <h2>This is Home {count}</h2>
            <Categories></Categories>
        </div>
    );
};

export default Home;