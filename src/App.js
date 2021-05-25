import { useEffect, useState } from 'react';
import './App.css';
import { Article } from './components/article/article.jsx';
import { fetchData } from './utils';

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetchData().then((response) => {
        setArticles(response);
        setIsFetching(false);
      });
    } catch (error) {
      setIsFetching(false);
      setError(error);
      throw new Error();
    }
  }, []);

  return (
    <div className='App'>
      <img
        className='coolLogo'
        src='https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80'
        alt='my really cool logo'
      />
      <header className='App-header'>
        <p>My really cool blog site</p>
      </header>

      {isFetching && <p>Loading...</p>}

      {error && <p>Error of loading data. Please try again later.</p>}

      {!error && articles && articles.length > 0 && (
        <div className={'article-list'}>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
