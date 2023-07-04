import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "tan",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/yavuz-%C3%B6zbay-01739b1b1/", "_blank");
  };
  const handleGitHubClick = () => {
    window.open("https://github.com/yavuzoz", "_blank");
  };

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<LinkedInIcon />}
        className={classes.root}
        onClick={handleLinkedInClick}
      />
      <BottomNavigationAction
        icon={<GitHubIcon />}
        className={classes.root}
        onClick={handleGitHubClick}
      />
    </BottomNavigation>
  );
};

export default Footer;
