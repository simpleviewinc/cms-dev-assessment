import React from 'react';
import Card from './Card';
import HorizontalCard from './HorizontalCard';
import VerticalCard from './VerticalCard';

const ArticleList = ({ articles, counter }) => {
  return (
    <div className="row">
      {
        articles.map((article, i) => {
          if(counter === 6) {
            counter = 0;
          }

          if(counter === 0 || counter % 6 === 0) {
            counter++;
            return (
              <HorizontalCard
                key={i}
                image={articles[i].mediaurl}
                title={articles[i].title}
                body={articles[i].description}
              />
            );
          } else if(counter % 5 === 0) {
            counter++;
            return (
              <VerticalCard
                key={i}
                image={articles[i].mediaurl}
                title={articles[i].title}
                body={articles[i].description}
              />
            );
          } else {
            counter++;
            return (
              <Card
                key={i}
                image={articles[i].mediaurl}
                title={articles[i].title}
                body={articles[i].description}
              />
            );
          }
        })
      }
    </div>
  );
}

export default ArticleList; 