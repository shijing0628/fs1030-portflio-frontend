import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./style.css";
import Grid from "@material-ui/core/Grid";

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
  return (
    <div className="workExperience_container">
      <br></br>
      <h2>Work Experience</h2>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://media.glassdoor.com/l/01/71/5d/5f/bold-commerce-headquarters.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <b>Bold Commerce</b> - App Installer
                </Typography>
                <Typography>2018-2020</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://pbs.twimg.com/media/D3Fox7DXcAAPS28.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <b>Bold Commerce</b> - App Installer
                </Typography>
                <Typography>2018-2020</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://lh3.googleusercontent.com/proxy/z_z1yCiVbj_NVTenBhqY80QExdQcRG_K_wiSZaTfzBnovc0uTjrCq0lCRmWW5JNKOaRH6RD-oktlPAm-H1aR2fEbGGLJqOYl5kKlGOHg1cJC8jtq1UdzLc1b21Ysf4MEq31O9JQUKBo3_0kli74"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <b>Bold Commerce</b> - App Installer
                </Typography>
                <Typography>2018-2020</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default WorkExperience;
