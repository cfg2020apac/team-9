import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '40px',
        width: '100%',
        textAlign: 'center'
    },
}));

export default function ContainedButtons() {
    const classes = useStyles();
    const history = useHistory();
    const studentFormsRouteChange = () => {
        const path = '/studentforms';
        history.push(path);
    }

    const volunteerFormsRouteChange = () => {
        const path = '/volunteerforms';
        history.push(path);
    }
    return (
        <div className={classes.root}>
            <Button variant="contained" style={{ color: 'green' }} onClick={studentFormsRouteChange}>Student Forms</Button>
            <Button variant="contained" style={{ color: 'green' }} onClick={volunteerFormsRouteChange}>Volunteer Forms</Button>
        </div>
    );
}