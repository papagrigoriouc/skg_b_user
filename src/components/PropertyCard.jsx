import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import house from '../images/house.jpg'
import  './PropertyCard.css'

export default class PropertyCard extends Component {
    render() {
        return (

            <Card className='card' style={{ width: '13rem'}}>
                <Card.Img variant="top" src={house} />
                <Card.Body>
                    <Card.Title>{this.props.obj.propertytitle}</Card.Title>
                    <Card.Text>
                     {this.props.obj.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                 </Card.Body>
            </Card>

        );
    }
}