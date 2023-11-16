import React from 'react'
import { productJSON } from '../product'
import Card from 'react-bootstrap/Card';


const Image = () => {
    const products = JSON.parse(productJSON)
    return (
        <Card.Img variant="top" src={products.imageUrl} />
    )
}

export default Image