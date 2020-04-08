import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';

const styles = theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    },
    subheader: {
      width: "100%"
    }
  });

  function SummaryCard(props) {
  return (
    <div className="SummaryCard" style={{display: "flex"}}>
        <Card>
            <h1>AHJHDFDFJDIFJEJ</h1>
        </Card>
    </div>
  );
};

export default withStyles(styles)(SummaryCard);