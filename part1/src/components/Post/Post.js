import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="h-100 w-100">
                <div className="post-image h-50">
                <img className="post-image-cover" src={this.props.data.imgurl} alt="hello"></img> 
                </div>
                <div className="post-body">
                    <p className="post-title">{this.props.data.title}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teneo, inquit, finem illi videri nihil dolere. Non semper, inquam; Et ille ridens: Video, inquit, quid agas; Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum vides quam niteat oratio.Duo Reges: constructio interrete.Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum viod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum vides quam niteat oratio.Duo Reges: constructio interrete.Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum vides quam niteat oratio.Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius</p>         
   </div>
                </div>
            </React.Fragment>
        );
    }
}
  
export default Post;
  