import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="h-100 w-100">
                <div className="post-image h-50">
                    <ImgAndFallback mediaurl={this.props.data.mediaurl}/>
                </div>
                <div className="post-body">
                {/* Because there are multiple items to be used in the
                  * PostBody item, I use the spread operator (`...`) to
                  * hand in just the whole container and it will be 
                  * available in the Component as broken-up.*/}
                     <PostBody {...this.props.data}/>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
  
export class ImgAndFallback extends React.Component{
    //utilize the onError function of React to change the src of the tag
    // use an anonymous function for simplicity and keeping everything in one place

    // NOTE: the input item is an event, not and error object, so instead of 'e' 
     // like many tutorials/docs suggest, I have called it erEV for "error event"

    // NOTE: also, used a secondary fallback image for development purposes
     // so that I can more easily identify the failed images and see the fallback
     // actually work instead of hoping. 
    
    render(){
        return <img onError={erEv => erEv.target.src="fallback2.jpg"} src={this.props.mediaurl}></img>
    }
}

export class PostBody extends React.Component{
    //Made this more modular so that any <type>Post item could use it and not
    // have to change the things in multiple places. 

    // technically due to the way this was written, most of the props are ignored
    // because most of the data from the API seems to be ignored. 
    render(){
        return(
            <React.Fragment>
                <p className="post-title">{this.props.title}</p>
                <p>{this.props.description}</p>  
            </React.Fragment>
        );
    }
}

export default Post;  