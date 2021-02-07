import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = props => {
    const { history } = props;
    const classes = useStyles();
    const [menu, setMenu] = React.useState(null);
    const open = Boolean(menu);

    const handleMenu = (event) => {
    
        setMenu(event.currentTarget);
    };

    const handleMenuClick = newPage => {
        history.push(newPage)
        setMenu(null);
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h6" className={classes.title}></Typography>
            <div>
              <IconButton
                onClick={handleMenu}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon style={{ color: "#9d4eddff" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                menu={menu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setMenu(null)}
              >
                <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
                <MenuItem onClick={() => handleMenuClick("/about")}>
                  About
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/projects")}>
                  Projects
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/contact")}>
                  Contact
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default withRouter(Navbar);