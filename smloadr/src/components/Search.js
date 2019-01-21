import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import "./Search.css";
import green from "@material-ui/core/colors/green";
import Radio from "@material-ui/core/Radio";
import Result from "./Result";

const styles = theme => ({
  root: {
    FlexGrow: 1,
    "&$checked": {
      color: green[500]
    }
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  checked: {}
});

class Search extends React.Component {
  state = {
    selectedValue: "album",
    spacing: "16",
    keyword: "eminem",
    word: ""
  };

  change = event => {
    this.setState({ word: event.target.value });
  };
  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };
  handler = e => {
    e.preventDefault();
    this.setState({ keyword: this.state.word });
  };
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div className="grid">
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid
              container
              className={classes.demo}
              justify="center"
              spacing={Number(spacing)}
            >
              <Input
                autoFocus={false}
                className="input"
                onChange={this.change}
              />
              <Button
                onClick={this.handler}
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Search
              </Button>
            </Grid>
            <Grid container className={classes.demo} justify="center">
              <div className="radio">
                Artist
                <Radio
                  checked={this.state.selectedValue === "artist"}
                  onChange={this.handleChange}
                  value="artist"
                  name="radio-button-demo"
                  aria-label="A"
                />
                Album
                <Radio
                  checked={this.state.selectedValue === "album"}
                  onChange={this.handleChange}
                  value="album"
                  name="radio-button-demo"
                  aria-label="B"
                />
                Track
                <Radio
                  checked={this.state.selectedValue === "track"}
                  onChange={this.handleChange}
                  value="track"
                  name="radio-button-demo"
                  aria-label="C"
                />
                Playlist
                <Radio
                  checked={this.state.selectedValue === "playlist"}
                  onChange={this.handleChange}
                  value="playlist"
                  name="radio-button-demo"
                  aria-label="D"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Result
          key={this.state.keyword}
          keyword={this.state.keyword}
          label={this.state.selectedValue}
        />
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
