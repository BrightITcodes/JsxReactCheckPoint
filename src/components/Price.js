import React from 'react'
import { productJSON } from '../product'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//This is the Price componenet that contains the Price from our project json
const Price = () => {
    const products = JSON.parse(productJSON)
    return (
        <Card.Body>
            <Row>
                <Col><Card.Text>Price:</Card.Text></Col>
                <Col><Card.Text>{products.price}</Card.Text></Col>
            </Row>
        </Card.Body>
    )
}

export default Price