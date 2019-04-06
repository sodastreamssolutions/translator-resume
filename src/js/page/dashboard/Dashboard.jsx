import React, { Component, Fragment } from 'react';
import FormArticleContainer from './FormArticleContainer'
import { articles } from '../../data/Data'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles,
            search: '',
         }
    }

    sort(asc) {
        this.setState({
            articles: this.state.articles.sort(asc ? this.asc : this.dsc)
        })
    }
    
    asc(a,b) {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
    }

    dsc(a,b) {
        if (a.title > b.title)
           return -1;
        if (a.title < b.title)
           return 1;
        return 0;
    }
    handleSearch(e) {
        const searchedPhrase = e.target.value.toUpperCase();
        this.setState({ 
            search: searchedPhrase,
            articles: articles.filter(article => article.title.toUpperCase().indexOf(searchedPhrase) > -1 )
        })        
    }

    render() { 
        return ( 
            <Fragment>
                <h1>aktualności</h1>
                <div className="search">
                        <button onClick={()=> this.sort("asc")}>Sortuj od a do z</button>
                        <button onClick={()=> this.sort()}>Sortuj od z do a</button>
                    <input value={this.state.search} onChange={(e)=>this.handleSearch(e)} placeholder="Wyszukaj.." ></input>
                </div>
                <ul className="list">
                    {
                        this.state.articles.map(article=> <li key={article.id}><FormArticleContainer article={article} /></li>)
                    }
                </ul>
            </Fragment>
         );
    }
}
 
export default Dashboard;
