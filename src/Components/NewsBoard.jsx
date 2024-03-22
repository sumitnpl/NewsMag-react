import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    //your api key here
    let api_key = 'api_key';
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // Filter out articles with null or empty title, description, or image URL
      const filteredData = data.articles.filter(article => (
        article.title && article.description && article.urlToImage
      ));
      setArticles(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-white">
      <h1 className="text-center px-2 py-2">Latest <span className="badge" style={{background:"#F9AD58"}}>News</span></h1>
      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
