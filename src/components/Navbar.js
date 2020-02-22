import React from "react"
import { theme } from "../theme"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

const Navbar = () => {
  const colors = theme.colors
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: colors.primary
    }
  }))
  const classes = useStyles()
  return (
    <AppBar className={classes.root}>
      <Toolbar className='nav-container'>
        <Button color='inherit' component={Link} to='/'>
          Home
        </Button>
        <Button color='inherit' component={Link} to='/login'>
          Login
        </Button>
        <Button color='inherit' component={Link} to='/signup'>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
