import React from 'react';
import PropTypes from 'prop-types';

import foto1 from '../../../../img/alice_munro.jpg';
import foto2 from '../../../../img/madame_chic.jpg';
import foto3 from '../../../../img/muza_480x320.jpg';
import foto4 from '../../../../img/salon.jpg';

function Article({ article }) {
  return (
    <div className="article">
      <div className="article__image">
        <img
          src={article.image}
          alt={article.image}
        />
      </div>
      <div className="article__text">
        <h2>{article.title}</h2>
        <span>{article.date}</span>
        {
        article.content.map((p) => <p key={p}>{p}</p>)
        }
        <a href={article.url}>{article.source}</a>
      </div>
      <button
        className="editArticle"
        hidden="hidden"
      >
        Edit
      </button>
      <button
        className="acceptArticle"
        hidden="hidden"
      >
        Akceptuj
      </button>
    </div>
  );
}

Article.propTypes = {
    article: PropTypes.string
};

export default Article;
