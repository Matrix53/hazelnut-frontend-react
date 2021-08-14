import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatchStore } from "store";

function SignInForm() {
  const dispatch = useDispatchStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "login" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="用户名" margin="normal" fullWidth />
      <TextField label="密码" margin="normal" fullWidth />
      <Button type="submit" fullWidth>
        登录
      </Button>
    </form>
  );
}

export default SignInForm;
