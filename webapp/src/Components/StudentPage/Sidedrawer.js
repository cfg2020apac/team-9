import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import HamburgerIcon from '../../Assets/hamburgericon.svg'
import CrossIcon from '../../Assets/crossicon.svg'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '100vw',
        height: '100vh',
        paddingTop: '56px',
        background: 'black',
        display: 'flex',
        position: 'relative',
        top: '0',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiButton-root': {
            textTransform: 'none',
        },
    },
    buttonText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '17px',
        lineHeight: '25px',
        color: 'white',
    }
}))

export default function Sidedrawer() {
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setSideDrawerIsVisible(open)
    }

    const classes = useStyles()
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)
    const drawerComponent = (
        <Grid className={classes.drawer}>
            <Button onClick={() => { }}>Community</Button>
            <Button onClick={() => { }} style={{ marginTop: '48px' }}>FAQ</Button>
            <Button onClick={() => { }} style={{ marginTop: '48px' }}>Contact Us</Button>
            <Button onClick={() => { }} style={{ backgroundColor: '#F71F47', marginTop: '48px', width: '163px', height: '46px' }}>Download Now</Button>
        </Grid>
    )

    return (
        <Fragment>
            {sideDrawerIsVisible
                ?
                <Button edge="start" aria-label="menu" onClick={toggleDrawer(false)}>
                    <img style={{ width: '24px', height: '24px' }} src={CrossIcon} alt="CrossIcon" />
                </Button>
                :
                <Button edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                    <img style={{ width: '24px', height: '24px' }} src={HamburgerIcon} alt="HamburgerIcon" />
                </Button>
            }
            <Drawer open={sideDrawerIsVisible} onClose={toggleDrawer(false)} anchor='top'>
                {drawerComponent}
            </Drawer>
        </Fragment>
    )
}