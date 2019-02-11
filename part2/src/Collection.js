import React, {Component} from 'react';

import ImgMediaCard from './ImgMediaCard.js';
import ImgMediaCardSmall from './ImgMediaCardSmall.js';

class Collection extends Component {
  render() {
    let p_items=this.props.posts;
    let display_posts = [];

    let i = 0;
    for(i=0; i< p_items.length; i++){
      if(0 == i%6){
        display_posts.push(
          <div className="col-md-4 col-lg-6">
                <ImgMediaCard data={p_items[i]}/>
          </div>
        );
      } else if (5 == i%6){
        display_posts.push(
          <ImgMediaCardSmall data={p_items[i]}/>
        );
      }else{
        display_posts.push(
          <div className="col-md-4 col-lg-3">
            <ImgMediaCard data={p_items[i]}/>
          </div>
        );
      }
    }


    return (
      <React.Fragment>
        <div class="row">
          {display_posts}
        </div>
      </React.Fragment>
    );
  }
}

export default Collection;