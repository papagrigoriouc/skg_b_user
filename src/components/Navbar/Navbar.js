import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
              <Link to='/' className='navbar-logo'></Link>
              <h1 className='navbar-logo'><i class="fas fa-sign-hanging"></i></h1>
              <div className='menu-icon'onClick={this.handleClick}>
                   <i className={this.state.clicked ? "fas fa-xmark" : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                         <a className={item.cName} href={item.url}>
                            {item.title}
                          </a>
                        </li>
                    )
                })}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar