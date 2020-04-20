import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Container, Row, Col, Card } from 'react-bootstrap';
import InformationCardHome from './InformationCardHome';

const styles = theme => ({
  root: {
    display: "inline",
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

export default function InfoGridList(props) {

    return (
        <Container>
            <Row>
                {this.info.map((information, i) => (
                    <Col key={'Col' + i} md="3" sm="4" xs="6">
                        <InformationCardHome key={i} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
    
}


// export default withStyles(styles)(InfoGridList);