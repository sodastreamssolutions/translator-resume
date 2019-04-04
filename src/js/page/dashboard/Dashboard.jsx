import React, { Component } from 'react';
import FormArticleContainer from './FormArticleContainer'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="search">
                    <button onclick="sort('asc')">Sortuj od a do z</button>
                    <button onclick="sort('dsc')">Sortuj od z do a</button>
                <input type="text" id="myInput" onkeyup="search()" placeholder="Wyszukaj.." title="Type in a name"></input>
                <FormArticleContainer/>
                </div>
         );
    }
}
 
export default Dashboard;
