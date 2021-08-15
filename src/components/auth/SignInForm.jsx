import { TextField, Button } from "@material-ui/core";
import { useDispatchStore } from "store";
import { useForm } from "react-hook-form";
import { login } from "api/auth";
import { useSnackbar } from "notistack";

function SignInForm() {
  const dispatch = useDispatchStore();
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const username = register("username", {
    required: { value: true, message: "用户名不能为空" },
  });
  const password = register("password", {
    required: { value: true, message: "密码不能为空" },
  });

  const onSubmit = (data) => {
    login(data).then((res) => {
      if (res.data.success) {
        enqueueSnackbar(res.data.message, { variant: "success" });
        dispatch({ type: "login", data: res.data.userId });
      } else {
        enqueueSnackbar(res.data.message, { variant: "warning" });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="用户名"
        margin="normal"
        fullWidth
        onChange={username.onChange}
        name={username.name}
        inputRef={username.ref}
        error={!!errors.username}
        helperText={errors.username && errors.username.message}
      />
      <TextField
        label="密码"
        margin="normal"
        fullWidth
        onChange={password.onChange}
        name={password.name}
        inputRef={password.ref}
        error={!!errors.password}
        helperText={errors.password && errors.password.message}
      />
      <Button type="submit" fullWidth>
        登录
      </Button>
    </form>
  );
}

export default SignInForm;
