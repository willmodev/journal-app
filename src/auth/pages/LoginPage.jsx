import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Grid, Link, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { AuthLayout } from '../layouts/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

export const LoginPage = () => {

    const dispatch = useDispatch();
    const { status } = useSelector(state => state.auth);



    const { email, password, onInputChange} = useForm({
        email: 'will@google.com',
        password: '123456'
    })

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {

        event.preventDefault();

        console.log({ email, password });
        dispatch( checkingAuthentication() );
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch( startGoogleSignIn() );
        
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={ onSubmit }>
                <Grid container
                    direction={'column'}
                >
                    <Grid item sx={{ mt: 2 }}>
                        <TextField 
                            label='Email' 
                            type='email' 
                            placeholder='example@example.com'
                            name='email'
                            value={ email }
                            onChange={ onInputChange } 
                            fullWidth 
                        />
                    </Grid>
                    <Grid item sx={{ mt: 2 }}>
                        <TextField 
                            label='Password' 
                            type='password' 
                            placeholder='******'
                            name='password'
                            value={ password }
                            onChange={ onInputChange }  
                            fullWidth 
                        />
                    </Grid>
                    <Grid item>
                    </Grid>

                    <Grid container
                        spacing={2}
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <Grid item xs={12} md={6}>
                            <LoadingButton 
                                loading={ isAuthenticating }
                                type='submit' 
                                variant='contained' 
                                fullWidth
                            >
                                Login
                            </LoadingButton>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <LoadingButton
                                loading={ isAuthenticating }
                                onClick={ onGoogleSignIn } 
                                variant='contained' fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </LoadingButton>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'end'}>
                        <Grid item>
                            <Link component={RouterLink} to={'/auth/register'}>
                                <Typography color={'inherit'}>crear una cuenta</Typography>
                            </Link>
                        </Grid>

                    </Grid>
                </Grid>


            </form>
        </AuthLayout>

    );
};
