import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#123123',
  },
}))

function GoodList() {
  const classes = useStyles()

  return <div className={classes.root}></div>
}

export default GoodList
