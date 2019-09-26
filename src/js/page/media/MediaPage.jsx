import React, { Component } from 'react';
import media from '../../data/media.json';
import MediaArticle from './components/MediaArticle';

class MediaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <section className="media">
                <div className="media__leftPanel">
                    <h1 className="media__header">media wywiady rozmowy</h1>
                </div>
                <div className="media__rightPanel">
                {
                    media.map(data=> <MediaArticle key={data.id} data={data}/>)
                }
                </div>
            </section>
         );
    }
}
 
export default MediaPage;