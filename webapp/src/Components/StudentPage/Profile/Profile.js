import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Profilepic from '../../../Assets/studentprofilepic.jpg'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Toolbar from '../../Toolbar/Toolbar'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        [theme.breakpoints.down("xs")]: {
            height: '100%'
        },
    },
    avatar: {
        width: '200px',
        height: '200px',
        marginTop: '100px',
        margin: 'auto'
    },
    text: {
        textAlign: 'left'
    }
}))

export default function Profile() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Toolbar />
            <div style={{ width: '100%', textAlign: 'center', }}>
                <Avatar src={Profilepic} alt="Profilepic" className={classes.avatar} />
                <div style={{ marginTop: '50px', width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Typography variant="h6" className={classes.text}>Name: Sally Lim</Typography>
                    <Typography variant="h6" className={classes.text}>Email: sallylim@gmail.com</Typography>
                    <Typography variant="h6" className={classes.text}>School: American School Hong Kong</Typography>
                    <Typography variant="h6" className={classes.text}>Projects taken: JA Company Programme 2019/20, JA Personal Spending 101</Typography>
                </div>
            </div>
        </div>
    )
}
