import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, Button } from 'react-bootstrap';

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

  const infoData = [
    {
        title: "System name",
        content: "I AM A SYSTEM CONTENT"
    },
    {
        title: "System name",
        content: "I AM A SECOND SYSTEM CONTENT"
    },
    {
        title: "System name",
        content: "I AM A THIRD SYSTEM CONTENT"
    }
];

class InformationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }
}

handleSearch = (e) => {
  this.setState({ info: infoData });
}


  render() {
  return (
    <Card>
    <Card.Body>
        <Card.Title>{this.state.info.title}</Card.Title>
        <Card.Subtitle>
            Year: {this.state.info.content}
        </Card.Subtitle>
        <Button variant="primary">Details</Button>
    </Card.Body>
    </Card>
  );
  }
};

export default withStyles(styles)(InformationCard);