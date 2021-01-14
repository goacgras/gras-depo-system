//TODO REDIRECT AND ADD LOGIC IN LOGIN SUCH AS SETLOCALSTORAGE ETC...
import { useState, useContext } from 'react';
// import { AuthContext } from '../context/auth';
import { useForm } from '../util/useForm';
import { LOGIN_MUTATION } from '../util/graphqlQuery';
import { useMutation } from '@apollo/client';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as actions from '../store/actions/index';

import useStyles from './styles';

const Login = ({ onLogin, isAuthenticated }) => {
    const [error, setError] = useState({});
    // const context = useContext(AuthContext);
    const classes = useStyles();

    const { onChangeHandler, onSubmitHandler, values } = useForm(
        loginUserCallback,
        {
            username: '',
            password: ''
        }
    );

    const [loginUser] = useMutation(LOGIN_MUTATION, {
        variables: values,
        update: (_, { data }) => {
            const token = data.login.token;
            onLogin(token);
            values.username = '';
            values.password = '';
        },
        onError: (err) => {
            console.log(err.graphQLErrors);
            setError(err.graphQLErrors[0].extensions.errors);
        }
    });

    function loginUserCallback() {
        loginUser();
    }

    let authRedirect = null;
    if (isAuthenticated) {
        authRedirect = <Redirect to="/" />;
    }

    return (
        <Grid container className={classes.container}>
            {authRedirect}
            <Grid item sm />
            <Grid item sm className={classes.login}>
                <Typography variant="h2">Login</Typography>
                <form noValidate onSubmit={onSubmitHandler}>
                    <TextField
                        className={classes.textField}
                        fullWidth
                        id="username"
                        name="username"
                        type="username"
                        label="Username"
                        value={values.username}
                        onChange={onChangeHandler}
                        error={error?.username ? true : false}
                        helperText={error?.username}
                    />
                    <TextField
                        className={classes.textField}
                        fullWidth
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        value={values.password}
                        onChange={onChangeHandler}
                        error={error?.username ? true : false}
                        helperText={error?.password}
                    />
                    {error?.general && (
                        <Typography
                            variant="body2"
                            style={{
                                color: 'red',
                                fontSize: '0.8rem',
                                marginTop: 10
                            }}
                        >
                            {error?.general}
                        </Typography>
                    )}
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
                    <small>don't have account yet? ask goacgras to login</small>
                </form>
            </Grid>
            <Grid item sm />
        </Grid>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (token) => dispatch(actions.login(token))
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.token !== null
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
