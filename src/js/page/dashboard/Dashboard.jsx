import React, { Component, Fragment } from 'react';
import FormArticleContainer from './FormArticleContainer'
import { articles } from '../../data/Data'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>aktualności</h1>
                <div class="search">
                        <button onclick="sort('asc')">Sortuj od a do z</button>
                        <button onclick="sort('dsc')">Sortuj od z do a</button>
                    <input type="text" id="myInput" onkeyup="search()" placeholder="Wyszukaj.." title="Type in a name"></input>
                    
                    </div>
                <ul class="list">
                    {
                        articles.map(article=> <li><FormArticleContainer article={article}/></li>)
                    }
                </ul>
            </Fragment>
         );
    }
}
 
export default Dashboard;
