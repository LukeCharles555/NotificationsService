import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import { Card } from 'react-bootstrap';
let tileData = require('../TileData.json');




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  }
  // titleBar: {
  //   background:
  //     'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  // },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1>Active subscriptions</h1>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <Card style={{width: 200, height: 150 }}>
          <GridListTile key={tile.name}>
            <Card.Title><h2>{tile.name}</h2></Card.Title>
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
            <Card.Body>{tile.content}</Card.Body>
            <Divider />
            <Card.Footer>
              <Badge badgeContent={tile.otherNames.length} color="primary">
                <MailIcon />
              </Badge>
            </Card.Footer>
          </GridListTile>
          </Card>
        ))}
      </GridList>
    </div>
  );
}
