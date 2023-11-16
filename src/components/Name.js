import React from 'react'
import Card from 'react-bootstrap/Card';
import { productJSON } from '../product';

//This is the Name componenet that contains the name from our project json

const Name = () => {
    const products = JSON.parse(productJSON)
    return (
        <Card.Title>{products.name}</Card.Title>
    )
}

export default Name