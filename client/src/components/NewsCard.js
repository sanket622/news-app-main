import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          className="card-img-top"
          style={{height: '200px', objectFit: 'cover'}}
        />
      )}
      <div className="card-body">
        <h5 className="card-title fw-bold">
          {article.title}
        </h5>
        <p className="card-text text-muted">
          {article.description}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <small className="text-muted fw-medium">{article.source?.name}</small>
          <small className="text-muted">
            {new Date(article.publishedAt).toLocaleDateString()}
          </small>
        </div>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary btn-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;