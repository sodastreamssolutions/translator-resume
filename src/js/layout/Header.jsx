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
                        <li><NavLink exact to="/home"><span>home</span></NavLink></li>
                        <li><NavLink exact to="/"><span>aktualności</span></NavLink></li>
                        <li><NavLink exact to="/przeklady"><span>przekłady</span></NavLink></li>
                        <li><NavLink exact to="/media"><span>media</span></NavLink></li>
                        <li><NavLink exact to="/kontakt"><span>kontakt</span></NavLink></li>
                    </ul>
                </nav>
            </header>
         );
    }
}
 
export default Header;