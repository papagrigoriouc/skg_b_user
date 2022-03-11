import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class PropertyCard extends Component {
    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
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