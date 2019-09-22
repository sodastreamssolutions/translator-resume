import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from './Article'

class ArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const { article } = this.props;
        return ( 
            <Article article={article}/>
        );
    }
}

Article.propTypes = {
    article: PropTypes.string
};
 
export default ArticleContainer;