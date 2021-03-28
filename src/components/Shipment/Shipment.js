import React from 'react';

const Shipment = (props) => {
    const { count } = props
    return (
        <div>
            <h2>This is Shipment {count}</h2>
        </div>
    );
};

export default Shipment;