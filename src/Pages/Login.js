import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const Login = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item sm />
            <Grid item sm className={classes.login}>
                <Typography variant="h2">Login</Typography>
                <form noValidate>
                    <TextField
                        className={classes.textField}
                        fullWidth
                        id="username"
                        name="username"
                        type="username"
                        label="Username"
                    />
                    <TextField
                        className={classes.textField}
                        fullWidth
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                    />
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                    <br />
                    <br />
                    <small>
                        don't have account yet? ask to goacgras to login
                    </small>
                </form>
            </Grid>
            <Grid item sm />
        </Grid>
    );
};

export default Login;
