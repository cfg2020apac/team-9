import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'transparent',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '0',
        right: '0',
        textAlign: 'center',
        zIndex: '1301',
        [theme.breakpoints.down("md")]: {
            width: '100%',
        },
    },
    toolbar: {
        '& .MuiButton-root': {
            height: 'fit-content',
            '&:hover': {
                color: '#299C3C'
            }
        },
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
    },
    buttonText: {
        fontSize: '14px',
        lineHeight: '21px',
    },
    logo: {
        '& .MuiButton-root': {
            height: 'fit-content',
            padding: '0',
            width: '100%'
        }
    },
    desktopBox: {
        display: 'inline-flex',
        width: '100%',
        justifyContent: 'flex-end',
        '& .MuiButton-root': {
            textTransform: 'none',
            margin: '0px 16px'
        },
        marginRight: '21px',
    },
}))

export default function ToolbarWrapper() {
    const classes = useStyles()
    const history = useHistory();

    const routeChange = () => {
        let path = `signin`;
        history.push(path);
    }
    return (
        <AppBar className={classes.appbar} position='sticky' elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Logo className={classes.logo} />
                <Box className={classes.desktopBox} >
                    <Button>
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon color="black" />
                        </Badge>
                    </Button>
                    <Button onClick={() => { }}>Profile</Button>
                    <Button color="#299C3C" onClick={routeChange}>Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}