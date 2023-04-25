import { Grid, Typography } from '@mui/material';
import React from "react";

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid container
            spacing={0}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: '4' }}
        >

            <Grid item
                className='box-shadow'
                xs={10} sm={6} md={4}
                sx={{ backgroundColor: 'white', p: 3, borderRadius: 2 }}
            >
                <Typography variant='h5' sx={{ mb: 2 }}>{ title }</Typography>
                { children }

            </Grid>
        </Grid>
    );
};
