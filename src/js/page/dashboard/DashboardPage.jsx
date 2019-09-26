import React, {
  Component,
} from 'react';
import ArticleContainer from './components/ArticleContainer';
import articlesData from '../../data/articles.json';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articlesData,
      search: '',
    };
  }

  sort(asc) {
    const { articles } = this.state;

    this.setState({
      articles: articles.sort(asc ? this.asc : this.dsc),
    });
  }

  asc(a, b) {
    if (a.title < b.title) { return -1; }

    if (a.title > b.title) { return 1; }

    return 0;
  }

  dsc(a, b) {
    if (a.title > b.title) { return -1; }

    if (a.title < b.title) { return 1; }

    return 0;
  }

  handleSearch(e) {
    const searchedPhrase = e.target.value.toUpperCase();

    this.setState({
      articles: articlesData.filter((article) => article.title.toUpperCase().indexOf(searchedPhrase) > -1),
      search: searchedPhrase,
    });
  }

  render() {
    const {
      articles,
      search,
    } = this.state;

    return (
      <>
        <h1>aktualności</h1>
        <div className="search">
          <button
           className="search__element"
           onClick={() => this.sort('asc')}
          >
            Sortuj od a do z
          </button>
          <button
           className="search__element"
           onClick={() => this.sort()}
          >
            Sortuj od z do a
          </button>
          <input
            value={search}
            onChange={(e) => this.handleSearch(e)}
            placeholder="Wyszukaj.."
          />
        </div>
        <ul className="list">
          {
            articles.map((article) => (
              <li key={article.id}><ArticleContainer article={article} /></li> 
            )
            )
          }
        </ul>
      </>
    );
  }
}

export default DashboardPage;
