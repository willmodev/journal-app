import { Link as RouterLink } from 'react-router-dom';

import { Alert, Grid, Link, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { AuthLayout } from '../layouts/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterUserWithEmailAndPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';

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

    const dispatch = useDispatch();

    const { status, errorMessage } = useSelector(state => state.auth);

    const isRegistering = useMemo(() => status === 'checking');


    const [isFormSubmit, setIsFormSubmit] = useState(false);

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
                            loading={isRegistering}
                            fullWidth
                        >
                            Crear Cuenta
                        </LoadingButton>
                    </Grid>

                    <Grid item xs={12}
                        sx={{ display: !errorMessage ? 'none' : ''  }}
                    >
                        <Alert 
                            severity='error'
                        >
                            { errorMessage }
                        </Alert>
                    </Grid>

                </Grid>

                <Grid container justifyContent={'end'} sx={{ mt: 2 }}>
                    <Grid item>
                        <Typography sx={{ mr: 2 }}>¿Ya estas registrado?</Typography>
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to={'/auth/login'}>
                            <Typography>Ingresar</Typography>
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>

    );
};
