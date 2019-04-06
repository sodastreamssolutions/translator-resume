import React, { Component } from 'react';

class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { data } = this.props;
        return ( 
            <div>
                <p>{data.content}</p>
                <p>{data.footer}</p>
                <span>Zródło: <a href={data.source}>{data.source}</a></span>
                {
                    data.links &&
                    data.links.map(link => <span key={link.name}><a href={link.url}>{link.name}</a></span>)
                }
            </div>
         );
    }
}
 
export default Media;