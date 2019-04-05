import React, { Component } from 'react';
import FormArticle from './FormArticle'

class FormArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FormArticle article={this.props.article}/>
        );
    }
}
 
export default FormArticleContainer;