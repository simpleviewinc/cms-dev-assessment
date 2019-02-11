import React, { Component } from 'react';

import Post from '../Post/Post'

class Smallpost extends Component {
    render() {
        return (
            <React.Fragment>
                {/*only show the smaller post on large*/}
                <div class="d-none d-lg-block col-lg-6">
                    <div class="row">
                        <div className="col-6 post-image-smaller">
                            <img className="post-image-cover" src={this.props.data.imgurl} alt="hello"></img>
                        </div>
                        <div className="col-6 post-body-smaller">
                            <p className="post-title">{this.props.data.title}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teneo, inquit, finem illi videri nihil dolere. Non semper, inquam; Et ille ridens: Video, inquit, quid agas; Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum vides quam niteat oratio.Duo Reges: constructio interrete.Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum viod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum vides quam niteat oratio.Duo Reges: constructio interrete.Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum vides quam niteat oratio.Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius </p>
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

export default Smallpost;