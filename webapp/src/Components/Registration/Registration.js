import React, { useState } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Registration() {
    const classes = useStyles()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [program, setProgram] = useState('')
    const history = useHistory();
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleProgramChange = (event) => {
        setProgram(event.target.value);
    };
    const studentHomepageNav = () => {
        const path = '/studenthomepage';
        history.push(path);
    }

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Toolbar />
            <Typography variant='h2'>Registration</Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField id="standard-name" label="Name" value={name} onChange={handleNameChange} />
                    <TextField id="standard-email" label="Email" value={email} onChange={handleEmailChange} />
                    <TextField id="standard-email" label="Program" value={program} onChange={handleProgramChange} />
                </div>
            </form>
            <Button onClick={studentHomepageNav}>Sign up!</Button>
        </div>
    )
}