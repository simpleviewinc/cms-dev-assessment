import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostItems from './PostItems.js';

const styles = {
  card: {
    //  width: '50%',
    // maxWidth: 345,
    height: '100%',
    borderRadius: 0,
    border: 0,
    boxShadow: '0 0 0 0 rgba(255,255,255, 0.9)',
    },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    width: '100%',
    height: '300px',
    maxHeight: '300px',
  },
 
  title: {
    fontWeight: 900,
    marginBottom: '12px',
    fontSize: '1.0rem',
  
  }
  

};

function ImgMediaCard(props) {
  const { classes } = props;
  return (



<Card className={classes.card}>

      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          // className="post-image-cover"
          className={classes.media}
          // className="post-image-cover h-100 w-100 post-image h-50"
          image="https://via.placeholder.com/500"
          title="Contemplative Reptile"

        />
        <CardContent className={classes.card}>
          <Typography className={classes.title}>
           Title of whatever
          </Typography>
          <div className="post-body2" >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
        </CardContent>
      {/* </CardActionArea> */}
      <div><button type="submit">Read More</button></div>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);