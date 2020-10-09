import React, { useState, useEffect, Fragment } from 'react'
import axios from '../../../axios'
import ClipLoader from "react-spinners/ClipLoader"
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Entry from './Entry'
import Toolbar from '../../Toolbar/Toolbar'

const useStyles = makeStyles((theme) => ({
    list: {
        marginTop: '52px',
        overflow: 'auto',
        height: '100vh',
        width: 'auto',
    }
}))

export default function StudentForms() {
    const classes = useStyles()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    let counter = 0;
    useEffect(() => {
        axios.get(`get-students`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(() => {
                console.log('error')
            })
    }, [])
    return (
        <Fragment>
            {loading ? (
                <ClipLoader color={"#EAECEE"} />
            ) : (
                    <div>
                        <Toolbar />
                        <Typography variant="h2">
                            Student Forms
            </Typography>
                        <List className={classes.list}>
                            {data.map((value) => <Entry key={value["name"]} name={value["name"]} email={value["email"]} contact={value["contactNum"]} programName={value["programName"]} counter={counter++} />)}
                        </List>
                    </div>
                )}
        </Fragment>
    )
}


