import React from 'react';
import Card from './Card';
import HorizontalCard from './HorizontalCard';
import VerticalCard from './VerticalCard';

const ArticleList = ({ articles }) => {
  return (
    <div className="row">
      {
        articles.map((article, i) => {
          if(i === 0 || i % 6 === 0) {
            return (
              <HorizontalCard
                key={i}
                id={articles[i].id}
                title={articles[i].title}
                body={articles[i].body}
              />
            );
          } else if(i % 5 === 0) {
            return (
              <VerticalCard
                key={i}
                id={articles[i].id}
                title={articles[i].title}
                body={articles[i].body}
              />
            );
          } else {
            return (
              <Card
                key={i}
                id={articles[i].id}
                title={articles[i].title}
                body={articles[i].body}
              />
            );
          }
        })
      }
    </div>
  );
}

export default ArticleList; 