import React from 'react';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CoursemologyLogo from '../../Assets/coursemology.png'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '1440px',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '40px'
    },
    card: {
        width: '100%',
        height: '250px',
        marginTop: '20px'
    }
})

export default function Coursemology() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h4">Coursemology</Typography>
            <Card className={classes.card}>
                <CardMedia
                    component="img"
                    alt="CardImage"
                    height="250px"
                    image={CoursemologyLogo}
                    title="CardImage"
                />
            </Card>
        </div>
    )
}