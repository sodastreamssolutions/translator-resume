import React, { Component } from 'react';
import FormArticle from './FormArticle'

class FormArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { article, image } = this.props;
        return ( 
            <FormArticle article={article} image={image}/>
        );
    }
}
 
export default FormArticleContainer;