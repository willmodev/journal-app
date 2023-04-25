import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layouts/AuthLayout';

export const LoginPage = () => {
    return (
        <AuthLayout title='Login'>
            <form>
                <Grid container
                    direction={'column'}
                    spacing={2}
                >
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
                    <Grid item xs={12} md={6}>
                        <Button variant='contained' fullWidth>Login</Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Button variant='contained' fullWidth>
                            <Google />
                            <Typography sx={{ ml: 1 }}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container justifyContent={'end'} sx={{ mt: 2 }}>
                    <Grid item>
                        <Link component={RouterLink} to={'/auth/register'}>
                            <Typography color={'inherit'}>crear una cuenta</Typography>
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>

    );
};
