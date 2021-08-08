import { login } from "api/auth";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function SignInForm() {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="用户名" />
      <TextField label="密码" />
      <Button>登录</Button>
      <Button component={Link} to="/signup">
        注册
      </Button>
    </form>
  );
}

export default SignInForm;
