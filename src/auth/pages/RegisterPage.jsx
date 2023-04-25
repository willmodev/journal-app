import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layouts/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Crear Cuenta'>
            <form>
                <Grid container
                    direction={'column'}
                    spacing={2}
                >
                    <Grid item>
                        <TextField label='Full Name' type='text' placeholder='Ingrese su nombre' fullWidth />
                    </Grid>
                    <Grid item>
                        <TextField label='Email' type='email' placeholder='example@example.com' fullWidth />
                    </Grid>
                    <Grid item>
                        <TextField label='Password' type='password' placeholder='******' fullWidth />
                    </Grid>
                    <Grid item>
                    </Grid>

                </Grid>

                <Grid container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <Button variant='contained' fullWidth>Crear Cuenta</Button>
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
