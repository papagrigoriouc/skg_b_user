import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './CreateProperty.css';

export default class CreateProperty extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangePropertyTitle = this.onChangePropertyTitle.bind(this);
    this.onChangePropertytPrice = this.onChangePropertyPrice.bind(this);
    this.onChangePropertyDescription = this.onChangePropertyDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      propertytitle: '',
      price: '',
      description: ''
    }
  }
  onChangePropertyTitle(e) {
    this.setState({ propertytitle: e.target.value })
  }
  onChangePropertyPrice(e) {
    this.setState({ price: e.target.value })
  }
  onChangePropertyDescription(e) {
    this.setState({ description: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const propertyObject = {
      propertytitle: this.state.propertytitle,
      price: this.state.price,
      description: this.state.description
    };
    axios.post('http://localhost:5000/api/property/create', propertyObject)
      .then(res => console.log(res.data));
    this.setState({ propertytitle: '', price: '', description: '' })
  }

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.propertytitle} onChange={this.onChangePropertyTitle} />
        </Form.Group>
        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={this.state.price} onChange={this.onChangePropertyPrice} />
        </Form.Group>
        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangePropertyDescription} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Property
        </Button>
      </Form>
    </div>);
  }
}