import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
    return (
        <Grid container
            spacing={0}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: '4' }}
        >

            <Grid item
                className='box-shadow'
                xs={4}
                sx={{ backgroundColor: 'white', p: 3, borderRadius: 2 }}
            >
                <form>

                    <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>

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
                           <Link component={ RouterLink } to={'/auth/register'}>
                            <Typography color={'inherit'}>crear una cuenta</Typography>
                           </Link>
                        </Grid>

                    </Grid>
                </form>
            </Grid>

        </Grid>
    );
};
