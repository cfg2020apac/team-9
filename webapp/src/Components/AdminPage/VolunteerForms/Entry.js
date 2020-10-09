import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
    clipText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '17px',
        lineHeight: '25px',
        color: 'black',
        textAlign: 'left',
    },
    username: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '21px',
        color: '#979797',
        textAlign: 'left',
    },
    listItem: {
        borderRadius: '8px',
        backgroundColor: 'white',
        marginBottom: '16px',
        height: '80px'
    },
    avatar: {
        width: '50px',
        height: '50px'
    }
}))

export default function Entry(props) {
    const classes = useStyles()
    return (
        <ListItem className={classes.listItem}>
            <Typography className={classes.clipText} style={{ marginLeft: '10px', marginRight: '20px' }}>{props.counter}</Typography>
            <ListItemText style={{ color: 'white' }}
                primary={<Typography className={classes.clipText} >{props.name}</Typography>}
                secondary={
                    <Fragment>
                        <Typography
                            className={classes.username}
                        >
                            {props.email}
                        </Typography>
                        <Typography
                            className={classes.username}
                        >
                            {props.contact}
                        </Typography>
                    </Fragment>
                } />
            <Typography className={classes.clipText} style={{ marginRight: '20px' }}>{props.company}</Typography>
            <Typography className={classes.clipText}>{props.programName}</Typography>
        </ListItem>
    )
}