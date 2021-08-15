import { Typography, Link } from "@material-ui/core";

function AppFooter() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      component="footer"
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
