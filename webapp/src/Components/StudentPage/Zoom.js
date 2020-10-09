import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Zoom from '../../Assets/zoom.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '1440px',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '40px',
        [theme.breakpoints.down("xs")]: {
            width: 'auto',
            padding: '0px 23px'
        },
    },
    list: {
        overflow: 'auto',
        height: '400px',
        width: '100%',
        marginTop: '10px'
    },
    listItem: {
        borderRadius: '8px',
        backgroundColor: 'white',
        marginBottom: '16px',
        height: '80px',
        [theme.breakpoints.down("xs")]: {
            height: '90px'
        },
    },
    avatar: {
        width: '50px',
        height: '50px'
    },
    clipText: {
        color: 'black',
        textAlign: 'left',
    },
}))

export default function Coursemology() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h4">Zoom Meetings</Typography>
            <List className={classes.list}>
                <ListItem className={classes.listItem} >
                    <Typography className={classes.clipText} style={{ marginLeft: '10px', marginRight: '20px' }}>1</Typography>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar} variant="rounded" alt="CommenterAvatar" src={Zoom} />
                    </ListItemAvatar>
                    <ListItemText style={{ color: 'white' }}
                        primary={<Typography className={classes.clipText} >Meeting with Volunteers</Typography>}
                        secondary={
                            <Fragment>
                                <Typography
                                    className={classes.username}
                                >
                                    Meeting ID: 998 1861 9734
                        </Typography>
                            </Fragment>
                        } />
                    <Typography className={classes.clipText}>26 April 2020</Typography>
                </ListItem>
                <ListItem className={classes.listItem} >
                    <Typography className={classes.clipText} style={{ marginLeft: '10px', marginRight: '20px' }}>2</Typography>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar} variant="rounded" alt="CommenterAvatar" src={Zoom} />
                    </ListItemAvatar>
                    <ListItemText style={{ color: 'white' }}
                        primary={<Typography className={classes.clipText} >Meeting with Volunteers</Typography>}
                        secondary={
                            <Fragment>
                                <Typography
                                    className={classes.username}
                                >
                                    Meeting ID: 945 2678 3438
                        </Typography>
                            </Fragment>
                        } />
                    <Typography className={classes.clipText}>15 Sep 2020</Typography>
                </ListItem>
                <ListItem className={classes.listItem} >
                    <Typography className={classes.clipText} style={{ marginLeft: '10px', marginRight: '20px' }}>3</Typography>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar} variant="rounded" alt="CommenterAvatar" src={Zoom} />
                    </ListItemAvatar>
                    <ListItemText style={{ color: 'white' }}
                        primary={<Typography className={classes.clipText} >Meeting with Volunteers</Typography>}
                        secondary={
                            <Fragment>
                                <Typography
                                    className={classes.username}
                                >
                                    Meeting ID: 907 3212 9773
                        </Typography>
                            </Fragment>
                        } />
                    <Typography className={classes.clipText}>19 Oct 2020</Typography>
                </ListItem>
            </List>
        </div>
    )
}