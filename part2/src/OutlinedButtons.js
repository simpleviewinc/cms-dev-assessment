import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  first:{
    margin: '0 7px 0 0',
  },
  navbar:{
    margin: '15px 0 15px 0',
  },


  input: {
    display: 'none',
  },
});




function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.first}>
        All
      </Button>
      <Button variant="contained" className={classes.button}>
        Listings
      </Button>
      <Button variant="contained" className={classes.button}>
        Events
      </Button>
      <Button variant="contained" className={classes.button}>
        Offers
      </Button>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);