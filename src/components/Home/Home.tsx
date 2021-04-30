import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import marvel_image from '../../assets/images/marvel-logo.jpeg';
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire';


interface Props{
    title: string;
}

// New Make Styles CSS Object
// Keys and values
const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'black'
    },

    // formatted string
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${marvel_image})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
})


export const Home = ( props:Props ) => {

    // New Classes variable
    // Classes below is the object that will hold the styles
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            {/* Nav Bar Code Here */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}`}>{props.title}</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to = "/" className={classes.nav_a}>Home</Link>
                        </li>

                        {/* Auth Check for Sign in and Dashboard */}
                        <AuthCheck fallback={
                            <li>
                                <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                            </li>
                        }>

                        <li>
                            <Link to ="/dashboard" className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                        </li>

                        <li>
                            <Link to="/signin" className={classes.nav_a}>Sign Out</Link>
                        </li>
                        </AuthCheck>
                    </ul>
                    
                </div>

            </nav>

            <main className={classes.main}>
                <div className = {classes.main_text}>
                    <h1> {props.title} </h1>
                    <p>I Like Marvel!!</p>
                    <Link to = '/signin'>
                    <Button color = 'primary' variant = 'contained'>Sign In</Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}