import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/ene2.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    margin: theme.spacing(1),
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "black",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Yavuz Özbay" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Yavuz Özbay"]} typeSpeed={50} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Native App Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
