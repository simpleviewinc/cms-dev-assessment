import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    border: '1px',
    borderColor: '#333',
    textDecoration: 'lowercase',


  },
  input: {
    display: 'none',
  },

});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
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
