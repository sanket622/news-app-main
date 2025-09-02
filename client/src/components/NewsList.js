import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  const fetchNews = async () => {
    try {
      const response = await fetch(
        // 'https://jsonplaceholder.typicode.com/posts'
      );
      
      if (!response.ok) {
        setArticles(getMockNews());
        setLoading(false);
        return;
      }
     
    } catch (error) {
      console.error('Error with request:', error);
      setArticles(getMockNews());
    } finally {
      setLoading(false);
    }
  };
    fetchNews();
  },[]);


  const getMockNews = () => [
    {
      title: "Madhuri Dixit And Juhi Chawla Did Not Marry Any Superstar Due To This Reason",
      description: "माधुरी दीक्षित और जूही चावला ने इस वजह से नहीं की किसी बॉलीवुड स्टार से शादी, सालों बाद खोला था राज। दोनों अभिनेत्रियों ने अपने करियर को प्राथमिकता दी और बाद में सामान्य परिवारों से शादी की।",
      url: "https://www.livehindustan.com/photos/entertainment/madhuri-dixit-and-juhi-chawla-did-not-marry-any-superstar-due-to-this-reason-201756548948838.html",
      urlToImage: "https://images.hindustantimes.com/img/2023/05/15/1600x900/madhuri_dixit_1684146982072_1684146982264.jpg",
      publishedAt: new Date().toISOString(),
      source: { name: "Live Hindustan" }
    },
    {
      title: "बॉलीवुड बॉक्स ऑफिस कलेक्शन",
      description: "हाल की हिंदी फिल्में बॉक्स ऑफिस पर शानदार प्रदर्शन कर रही हैं और रिकॉर्ड तोड़ कमाई कर रही हैं।",
      url: "https://www.livehindustan.com/entertainment",
      urlToImage: "https://images.hindustantimes.com/img/2023/12/20/1600x900/bollywood_box_office_1703073456789_1703073456945.jpg",
      publishedAt: new Date().toISOString(),
      source: { name: "Live Hindustan" }
    },
    {
      title: "बॉलीवुड सेलिब्रिटी अपडेट्स",
      description: "बॉलीवुड सेलिब्रिटीज और मनोरंजन उद्योग की दुनिया से नवीनतम समाचार और अपडेट्स।",
      url: "https://www.livehindustan.com/entertainment",
      urlToImage: "https://images.hindustantimes.com/img/2023/11/10/1600x900/bollywood_celebrities_1699615234567_1699615234789.jpg",
      publishedAt: new Date().toISOString(),
      source: { name: "Live Hindustan" }
    }
  ];

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh', paddingTop: '80px'}}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="fs-5 text-muted">समाचार लोड हो रहे हैं...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{paddingTop: '80px', paddingBottom: '2rem'}}>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-12">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;