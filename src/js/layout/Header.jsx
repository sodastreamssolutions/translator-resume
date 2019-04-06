import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header>
                <nav>
                    <ul>
                        <li><NavLink exact to="/home">home</NavLink></li>
                        <li className="active"><NavLink exact to="/">aktualności</NavLink></li>
                        <li><NavLink exact to="/przeklady">przekłady</NavLink></li>
                        <li><NavLink exact to="/media">media</NavLink></li>
                        <li><NavLink exact to="/kontakt">kontakt</NavLink></li>
                    </ul>
                </nav>
            </header>
         );
    }
}
 
export default Header;