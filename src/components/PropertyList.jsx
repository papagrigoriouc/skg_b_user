import React, { Component } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import  './PropertyList.css';




export default class PropertyList extends Component {

    constructor(props){
        super(props)
        this.state = {
            properties:[]
        }
        
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/property/all')
        .then(res => {
            this.setState({
                properties: res.data                
                
            });
        // console.log(this.state);
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
    
    DataTable(){
        return this.state.properties.map((res, i )=>{
            return <PropertyCard obj={res} key={i} />;
            
        });
        
    };

    render() {
        return (
            <div>
                <p>Property List Component</p>
                <div className='cards'>
                    {this.DataTable()}
                </div>       
            </div>
           
        );
    }
}

