import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import NotificationCardHome from '../components/NotificationCardHome';
import SummaryCardHome from '../components/SummaryCardHome';
import InformationCardHome from '../components/InformationCardHome';
import SingleLineGridList from './Grid';
import InfoGridList from '../components/InformationGrid';

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
                <SingleLineGridList />

    </div>
  );
};


export default withStyles(styles)(FlatButtons);