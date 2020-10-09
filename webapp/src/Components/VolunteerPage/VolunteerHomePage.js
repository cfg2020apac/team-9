import React from 'react'
import Toolbar from '../Toolbar/Toolbar'
import Events from './Events'
import Coursemology from './Coursemology'
import Zoom from './Zoom'
import Iframe from 'react-iframe'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    iframe: {
        textAlign: 'right'
    }
}))

export default function VolunteerHomePage() {
    const classes = useStyles()
    return (
        <div style={{ width: '100%' }}>
            <Toolbar />
            <Events />
            <Coursemology />
            <Zoom />
            <Iframe url="https://console.dialogflow.com/api-client/demo/embedded/8d08f8a8-7a89-4acb-9c78-38a28648eaf4"
                width='100%'
                height='400px'
                id="myId"
                className={classes.iframe}
            />
        </div>
    )
}