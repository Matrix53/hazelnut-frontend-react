import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "5vh",
    width: "100vw",
  },
}));

function AppFooter() {
  const classes = useStyles();

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      component="footer"
      className={classes.root}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.matrix53.top/">
        Hazelnut
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default AppFooter;
