import React from 'react';

function MediaArticle ({ data }) {
    return ( 
        <div className="media-article">
            <p className="media-article__description">{data.content}</p>
            <p className="media-article__footer">{data.footer}</p>
            <p className="media-article__source">Zródło: <a href={data.source}>{data.source}</a></p>
            {
                data.links &&
                data.links.map(link => <span className="media-article__link" key={link.name}><a href={link.url}>{link.name}</a></span>)
            }
        </div>
    );
}
 
export default MediaArticle;