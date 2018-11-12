import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="h-100 w-100">
                <div className="post-image h-50">
                <img src={this.props.data.imgurl}></img>
                </div>
                <div className="post-body">
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
            </React.Fragment>
        );
    }
}
  
export default Post;
  