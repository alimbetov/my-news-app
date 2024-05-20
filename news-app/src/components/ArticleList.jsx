
import React, { useState, useEffect } from 'react';

import Card from './Card';


const url='https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl';
const ArticleList = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const myArticles = data.results;
        console.log(myArticles);
        setArticles(myArticles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

  }, []); // Пустой массив зависимостей для вызова useEffect только один раз при монтировании компонента

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Articles</h1>
        {articles.map(a => (
          <Card a={a} /> 
        ))}
    </div>
  );

  /***
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(a => (
          <li>    {a.section}   : {a.title} </li>
        ))}
      </ul>
    </div>
  );
  */

};


export default ArticleList;
