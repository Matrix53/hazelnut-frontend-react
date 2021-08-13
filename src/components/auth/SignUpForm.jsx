import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function SignUpForm() {
  const handleSubmit = () => {};
  // const getCaptcha = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="用户名" margin="normal" fullWidth />
      <TextField label="密码" margin="normal" fullWidth />
      <Button component={Link} to="/signin" fullWidth>
        登录
      </Button>
      <Button type="submit" fullWidth>
        注册
      </Button>
    </form>
  );
}

export default SignUpForm;
