import { Button, IconButton, AppBar, Toolbar, Box } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useStateStore } from "store";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "10vh",
    lineHeight: "10vh",
    background: theme.palette.primary.main,
  },
  title: {
    height: "10vh",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "3vh",
  },
  link: {
    height: "10vh",
    color: "white",
    marginRight: theme.spacing(2),
    fontSize: "1.8vh",
  },
}));

function AppHeader() {
  const classes = useStyles();
  const isLogin = useStateStore().isLogin;

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Link to="/good" className={classes.title}>
          Hazelnut交易平台
        </Link>
        <Box flexGrow={1} />
        {isLogin ? (
          <IconButton>
            <AccountCircle />
          </IconButton>
        ) : (
          <>
            <Button component={Link} to="/signin" className={classes.link}>
              登录
            </Button>
            <Button component={Link} to="/signup" className={classes.link}>
              注册
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
