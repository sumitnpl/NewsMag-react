import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5fc1e14135a7467e89ae07e5eddb1e29`);
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
    <div className="mx-7">
      <h1 className="text-center px-3 py-3">Latest <span className="badge bg-danger">News</span></h1>
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
