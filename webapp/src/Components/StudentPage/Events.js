import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Event1 from '../../Assets/event1.png'
import Event2 from '../../Assets/event2.png'
import Event3 from '../../Assets/event3.png'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '1440px',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '40px'
    },
    card: {
        maxWidth: 330,
        height: '500px',
        backgroundColor: '#F2FFF4',
        borderRadius: '16px'
    },
})

export default function Events() {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h4">Upcoming Events</Typography>
            <Grid className={classes.root} container justify="center" spacing={4} >
                {['Event1', 'Event2', 'Event3'].map((value) => (
                    <Grid key={value} item data-aos='fade'>
                        <Card className={classes.card}>
                            <CardMedia
                                component="img"
                                alt="CardImage"
                                height="250px"
                                image={value === 'Event1' ? Event1 : value === 'Event2' ? Event2 : Event3}
                                title="CardImage"
                            />
                            <CardContent style={value === 'Event1' ? { paddingTop: '55px', textAlign: 'center' } : value === 'Event2' ? { paddingTop: '30px', textAlign: 'center' } : { paddingTop: '15px', textAlign: 'center' }}>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {value === 'Event1' ? 'The program connects young people with career opportunities and future skills required under the Industrial Revolution 4.0.'
                                        : value === 'Event2' ? 'JA Business Ethics exposes students to ethical challenges in the workplace and how to successfully navigate these dilemmas and apply lessons in real-life situations.'
                                            : '“Play” It Forward HK@APEC Game Design Competition aims at enhancing students’ awareness and understanding of the key issues and trends on regional trade and economic cooperation.'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}