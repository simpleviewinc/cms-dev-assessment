import React, {Component} from 'react';

import Post from './Post.js'

class SkinnyPost extends Component {
    render() {
        return (
            <React.Fragment>
                {/*only show the skinny post on large*/}
                <div class="d-none d-lg-block col-lg-6">
                <div class="row">
                    <div className="col-6 post-image-skinny">
                    <img src={this.props.data.imgurl}></img>
                    </div>
                    <div className="col-6 post-body-skinny">
                        <p className="post-title">{this.props.data.title}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Teneo, inquit, finem illi videri nihil dolere.
                            Non semper, inquam; <a href="http://loripsum.net/" 
                            target="_blank">Et ille ridens: Video, inquit, 
                            quid agas;</a> Nam et complectitur verbis, quod 
                            vult, et dicit plane, quod intellegam;
                            Sed vos squalidius, illorum vides quam niteat oratio.
                            <a href="http://loripsum.net/" target="_blank">
                            Duo Reges: constructio interrete.</a> 
                            Nam et complectitur verbis, quod vult, et dicit plane,
                            quod intellegam; Sed vos squalidius, illorum vides quam
                            niteat oratio.Nam et complectitur verbis, quod vult, et 
                            dicit plane, quod intellegam; Sed vos squalidius, illorum
                            vides quam niteat oratio. </p>
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