import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/styles'
import Logopic from '../../Assets/Logo.png'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    iconButton: {
        marginLeft: '0px'
    },
    fullIcon: {
        height: '100%',
        width: '120px'
    },
    iconRoot: {
        textAlign: 'center',
    }
}))

export default function Logo() {
    const history = useHistory()
    const navigateLomotifHandler = () => {
        history.push('/')
    }

    const classes = useStyles()
    return (
        <div>
            <IconButton className={classes.iconButton} onClick={navigateLomotifHandler} >
                <img className={classes.fullIcon} src={Logopic} alt="FullLogo" />
            </IconButton>
        </div>
    )
}