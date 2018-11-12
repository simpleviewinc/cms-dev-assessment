import React, {Component} from 'react';

import Post, {ImgAndFallback, PostBody}from './Post.js'

class SkinnyPost extends Component {
    render() {
        return (
            <React.Fragment>
                {/*only show the skinny post on large*/}
                <div class="d-none d-lg-block col-lg-6">
                <div class="row">
                    <div className="col-6 post-image-skinny">
                        <ImgAndFallback mediaurl={this.props.data.mediaurl}/>
                    </div>
                    <div className="col-6 post-body-skinny">
                        <PostBody {...this.props.data} />
                    </div>
                </div>
                </div>
                    

                <div className="d-lg-none col-md-4">
                    <Post data={this.props.data} />
                </div>
            </React.Fragment>
        );
    }
}
  
export default SkinnyPost;