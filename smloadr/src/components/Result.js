import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Album from "./Album";
import Artist from "./Artist";
import Playlist from "./Playlist";
import Track from "./Track";
import "./Spinner.css";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class Result extends React.Component {
  render() {
    const { classes } = this.props;
    const { label, keyword } = this.props;
    if (label === "album") {
      return <Album keyword={keyword} />;
    } else if (label === "artist") {
      return <Artist keyword={keyword} />;
    } else if (label === "playlist") {
      return <Playlist keyword={keyword} />;
    } else if (label === "track") {
      return <Track keyword={keyword} />;
    }
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Result);
