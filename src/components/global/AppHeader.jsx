import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
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
    <AppBar>
      <Toolbar>
        <Link to="/good">
          <img src={logo} alt="Logo" className={classes.logo} />
        </Link>
        <Link to="/good">
          <div>Hazelnut交易平台</div>
        </Link>
        {!isLogin ? (
          <IconButton>
            <AccountCircle />
          </IconButton>
        ) : (
          <>
            <Button>登录</Button>
            <Button>注册</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
