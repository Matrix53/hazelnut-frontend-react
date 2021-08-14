import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  captchaBtn: {
    height: "100%",
  },
}));

function SignUpForm() {
  const classes = useStyles();
  const handleSubmit = () => {};
  // const getCaptcha = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="用户名" margin="normal" fullWidth />
      <TextField label="密码" margin="normal" fullWidth />
      <TextField label="邮箱" margin="normal" fullWidth />
      <Grid container>
        <Grid item xs={6}>
          <TextField fullWidth label="验证码" margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth className={classes.captchaBtn}>
            获取验证码
          </Button>
        </Grid>
      </Grid>
      <Button type="submit" fullWidth>
        注册
      </Button>
    </form>
  );
}

export default SignUpForm;
