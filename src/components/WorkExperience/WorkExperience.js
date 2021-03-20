import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "./style.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 140,
  },
});

function WorkExperience() {
  const classes = useStyles();

  const [experienceList, setExperienceList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/resume").then(({ data }) => {
      setExperienceList(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="workExperience_container">
      <br></br>
      <h2>Work Experience</h2>
      <br></br>
      <Grid container spacing={3}>
        {experienceList &&
          experienceList.map((w) => (
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={w.company_image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <b>{w.companyName}</b> - {w.job_title}
                    </Typography>
                    <Typography>{w.work_date}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {w.job_desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default WorkExperience;
