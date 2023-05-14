import { Link as RouterLink } from 'react-router-dom';

import { Alert, Grid, Link, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { AuthLayout } from '../layouts/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { resetStateAuth, startRegisterUserWithEmailAndPassword } from '../../store/auth';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ButtonLink } from '../components';


const formData = {
    displayName: '',
    email: '',
    password: ''
}

const formValidations = {
    displayName: [(value) => value.length >= 1, 'El fullName debe ser obligatorio'],
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length >= 6, 'El password debe tener mas de 6 caracteres']
}

export const RegisterPage = () => {


    const { errorMessage, isFormSubmit, setIsFormSubmit, dispatch } = useAuth();
    const navigate = useNavigate();

    const {
        displayName, email, password, onInputChange,
        displayNameValid, emailValid, passwordValid, isFormValid
    } = useForm(formData, formValidations);


    const onSubmit = (event) => {
        event.preventDefault();
        setIsFormSubmit(true);

        if (!isFormValid) return;

        dispatch(startRegisterUserWithEmailAndPassword({ displayName, email, password }));

    }

    const onNavigateToLogin = (event) => {
        event.preventDefault();

        dispatch( resetStateAuth() );

        navigate('/auth/login');
        
    }

    const isError = (formField) => formField && isFormSubmit;

    return (
        <AuthLayout title='Crear Cuenta'>
            <form onSubmit={onSubmit}>
                <Grid container
                    direction={'column'}
                    spacing={2}
                >
                    <Grid item>
                        <TextField
                            label='Full Name'
                            type='text'
                            placeholder='Ingrese su nombre'
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={isError(!!displayNameValid)}
                            helperText={isFormSubmit && displayNameValid}
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='example@example.com'
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={isError(!!emailValid)}
                            helperText={isFormSubmit && emailValid}
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='******'
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={isError(!!passwordValid)}
                            helperText={isFormSubmit && passwordValid}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <LoadingButton
                            type='submit'
                            variant='contained'
                            // loading={isAuthenticating}
                            fullWidth
                        >
                            Crear Cuenta
                        </LoadingButton>
                    </Grid>

                    <Grid item xs={12}
                        sx={{ display: !errorMessage ? 'none' : '' }}
                    >
                        <Alert
                            severity='error'
                        >
                            {errorMessage}
                        </Alert>
                    </Grid>

                </Grid>

                <Grid container justifyContent={'end'} alignItems={'center'} sx={{ mt: 2 }}>
                    <Grid item>
                        <Typography sx={{ mr: 2 }}>¿Ya estas registrado?</Typography>
                    </Grid>
                    <Grid item>
                        <ButtonLink
                            name='Ingresar'
                            onNavigate={ onNavigateToLogin }
                        />
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>

    );
};
