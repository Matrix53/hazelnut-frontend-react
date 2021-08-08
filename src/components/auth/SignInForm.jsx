import { login } from "api/auth";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function SignInForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="用户名" margin="normal" fullWidth />
      <TextField label="密码" margin="normal" fullWidth />
      <Button type="submit" fullWidth>
        登录
      </Button>
      <Button component={Link} to="/signup" fullWidth>
        注册
      </Button>
    </form>
  );
}

export default SignInForm;
