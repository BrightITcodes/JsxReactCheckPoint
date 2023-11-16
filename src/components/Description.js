import React from 'react'
import { productJSON } from '../product'
import Card from 'react-bootstrap/Card';

//This is the Description componenet that contains the Description from our project json
const Description = () => {
    const products = JSON.parse(productJSON)
    return (
        <Card.Text align='left'>
            {products.description}
        </Card.Text>
    )
}

export default Description