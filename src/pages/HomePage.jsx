import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import NotificationCardHome from '../components/NotificationCardHome';
import SummaryCardHome from '../components/SummaryCardHome';
import InformationCardHome from '../components/InformationCardHome';

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

const FlatButtons = props => {
  const { classes } = props;
  return (
    <div>
        <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        > 
                <NotificationCardHome />
        </Grid>
        <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        > 
                <SummaryCardHome />
        </Grid>
        <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        > 
                <InformationCardHome />
        </Grid>
    </div>
  );
};


export default withStyles(styles)(FlatButtons);