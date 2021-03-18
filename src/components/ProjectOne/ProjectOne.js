import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "60%",
    margin: "0 auto",
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ProjectOne() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className="project-title">Project One</h1>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <img src={pic1} alt="project 1" width="100%" />
          <img src={pic2} alt="project 1" width="100%" />
          <img src={pic3} alt="project 1" width="100%" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Paper className={classes.paper}>
            <h3 className="prj-desc">Project Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus et tempora dolorem eum facilis, sequi molestiae
              obcaecati omnis similique deleniti alias officia minima nesciunt
              distinctio. Sequi quidem temporibus quo excepturi! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quaerat quisquam
              voluptatum incidunt, temporibus nostrum eos dicta possimus enim?
              Maiores unde enim
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus et tempora dolorem eum facilis, sequi molestiae
              obcaecati omnis similique deleniti alias officia minima nesciunt
              distinctio. Sequi quidem temporibus quo excepturi! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quaerat quisquam
              voluptatum incidunt, temporibus nostrum eos dicta possimus enim?
              Maiores unde enim
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus et tempora dolorem eum facilis, sequi molestiae
              obcaecati omnis similique deleniti alias officia minima nesciunt
              distinctio. Sequi quidem temporibus quo excepturi! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quaerat quisquam
              voluptatum incidunt, temporibus nostrum eos dicta possimus enim?
              Maiores unde enim
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus et tempora dolorem eum facilis, sequi molestiae
              obcaecati omnis similique deleniti alias officia minima nesciunt
              distinctio. Sequi quidem temporibus quo excepturi! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quaerat quisquam
              voluptatum incidunt, temporibus nostrum eos dicta possimus enim?
              Maiores unde enim
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus et tempora dolorem eum facilis, sequi molestiae
              obcaecati omnis similique deleniti alias officia minima nesciunt
              distinctio. Sequi quidem temporibus quo excepturi! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quaerat quisquam
              voluptatum incidunt, temporibus nostrum eos dicta possimus enim?
              Maiores unde enim
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus et tempora dolorem eum facilis, sequi molestiae
              obcaecati omnis similique deleniti alias officia minima nesciunt
              distinctio. Sequi quidem temporibus quo excepturi! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quaerat quisquam
              voluptatum incidunt, temporibus nostrum eos dicta possimus enim?
              Maiores unde enim m incidunt,
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectOne;
