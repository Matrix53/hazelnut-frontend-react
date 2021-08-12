import { Button, IconButton, AppBar, Toolbar } from "@material-ui/core";
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
    flexGrow: 1,
  },
  link: {
    height: "10vh",
    color: "white",
    marginRight: theme.spacing(2),
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
