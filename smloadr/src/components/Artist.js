import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
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

class Artist extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    const { keyword } = this.props;
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=" +
        keyword
    )
      .then(res => res.json())
      .then(res => this.setState({ data: res.data }));
  }
  render() {
    const { classes } = this.props;
    const { data } = this.state;
    if (data.length)
      return (
        <div className={classes.root}>
          <Grid container spacing={24} justify="center">
            {data.map(item => (
              <Grid item xs key={item.id}>
                <Card className={classes.card}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {item.nb_fan} fans
                      </Typography>
                    </CardContent>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image={item.picture_medium}
                    title={item.name}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    else
      return (
        <div className="lds-ripple">
          <div />
          <div />
        </div>
      );
  }
}

Artist.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Artist);
