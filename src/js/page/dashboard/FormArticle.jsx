import React, { Component } from 'react';

class FormArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="article">
                <div className="article__image"><img src={this.props.article.image} alt={this.props.article.image}/></div>
                <div className="article__text">
                    <h2>{this.props.article.title}</h2>
                    <span>{this.props.article.date}</span>
                    {
                        this.props.article.content.map(p => <p key={p}>{p}</p>)
                    }
                    <a href={this.props.article.url}>{this.props.article.source}</a>
                </div>
                <button className="editArticle" hidden="hidden">Edit</button>
                <button className="acceptArticle" hidden="hidden">Akceptuj</button>
            </div>
        );
    }
}
 
export default FormArticleContainer;