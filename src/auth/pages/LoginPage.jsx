import { Google } from '@mui/icons-material';
import { Alert, Grid, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { AuthLayout } from '../layouts/AuthLayout';
import { useForm } from '../../hooks';
import { resetStateAuth, startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ButtonLink } from '../';


const formData = {
    email: '',
    password: ''

}

export const LoginPage = () => {


    const { errorMessage, dispatch } = useAuth();
    const navigate = useNavigate();


    const { email, password, onInputChange } = useForm(formData)

    const onSubmit = (event) => {

        event.preventDefault();

        dispatch(startLoginWithEmailAndPassword({ email, password }));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    const onNavigateToRegister = (event) => {
        event.preventDefault();

        dispatch(resetStateAuth());

        navigate('/auth/register');

    }
    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid container
                    direction={'column'}
                >
                    <Grid item sx={{ mt: 2 }}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='example@example.com'
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item sx={{ mt: 2 }}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='******'
                            name='password'
                            value={password}
                            onChange={onInputChange}
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
                                // loading={isAuthenticating}
                                type='submit'
                                variant='contained'
                                fullWidth
                            >
                                Login
                            </LoadingButton>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <LoadingButton
                                // loading={isAuthenticating}
                                onClick={onGoogleSignIn}
                                variant='contained' fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </LoadingButton>
                        </Grid>

                        <Grid item xs={12} 
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity='error'> {errorMessage} </Alert>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'end'}>
                        <Grid item>
                            <ButtonLink 
                                name='crear una cuenta' 
                                onNavigate={ onNavigateToRegister }
                            />
                        </Grid>

                    </Grid>
                </Grid>


            </form>
        </AuthLayout>

    );
};
