import { Button, IconButton, AppBar, Toolbar } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import logo from "assets/logo.png";
import { useStateStore } from "store";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  logo: {
    width: "5vmin",
  },
});

function AppHeader() {
  const classes = useStyles();
  const isLogin = useStateStore().isLogin;

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to="/good">
          <img src={logo} alt="Logo" className={classes.logo} />
        </Link>
        <Link to="/good">
          <div>Hazelnut交易平台</div>
        </Link>
        {isLogin ? (
          <IconButton>
            <AccountCircle />
          </IconButton>
        ) : (
          <>
            <Button component={Link} to="/signin">
              登录
            </Button>
            <Button component={Link} to="/signup">
              注册
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
