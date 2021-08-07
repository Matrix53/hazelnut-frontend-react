import { Button } from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core/IconButton";
import { AppBar } from "@material-ui/core/AppBar";
import { AccountCircle } from "@material-ui/icons";
import { useStateStore } from "store";
import { Link } from "react-router-dom";

function AppHeader() {
  const isLogin = useStateStore().isLogin;

  return (
    <AppBar>
      <Link to="/good">
        <img src="assets/logo.png" alt="Logo" />
        <div>Hazelnut交易平台</div>
      </Link>
      {isLogin ? (
        <IconButton>
          <AccountCircle />
        </IconButton>
      ) : (
        <>
          <Button>登录</Button>
          <Button>注册</Button>
        </>
      )}
    </AppBar>
  );
}

export { AppHeader };
