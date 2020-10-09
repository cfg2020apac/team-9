import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Event1 from '../../Assets/volunteerevent1.png'
import Event2 from '../../Assets/volunteerevent2.png'
import Event3 from '../../Assets/volunteerevent3.png'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '1440px',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '40px',
        [theme.breakpoints.down("xs")]: {
            width: '100%',
        },
    },
    card: {
        maxWidth: 330,
        height: '500px',
        backgroundColor: '#F2FFF4',
        borderRadius: '16px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
}))

export default function Events() {
    const history = useHistory();
    const classes = useStyles();
    const registrationNav = () => {
        const path = '/registration';
        history.push(path);
    }
    return (
        <div className={classes.root}>
            <Typography variant="h4">Upcoming Events</Typography>
            <Grid className={classes.root} container justify="center" spacing={4} >
                {['Event1', 'Event2', 'Event3'].map((value) => (
                    <Grid key={value} item data-aos='fade'>
                        <Card className={classes.card} onClick={registrationNav}>
                            <CardMedia
                                component="img"
                                alt="CardImage"
                                height="250px"
                                image={value === 'Event1' ? Event1 : value === 'Event2' ? Event2 : Event3}
                                title="CardImage"
                            />
                            <CardContent style={value === 'Event1' ? { paddingTop: '40px', textAlign: 'center' } : value === 'Event2' ? { paddingTop: '50px', textAlign: 'center' } : { paddingTop: '15px', textAlign: 'center' }}>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {value === 'Event1' ? 'As a Business Volunteer, you will: Interact with a team of students, help students to understand themselves and build their personal brand'
                                        : value === 'Event2' ? 'Benefits of being a Business Volunteer: Great sense of satisfaction witnessing student’s growth and transformation'
                                            : 'As a Business Volunteer, you will: Share your financial management knowledge and experience with 100 – 150 students in a 1-hour (Online) / 1.5-hour (Face-to-Face) workshop'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}