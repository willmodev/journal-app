import { LogoutOutlined } from '@mui/icons-material';
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from "react";
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <AppBar
            position='fixed'
            sx={{ 
                width: { sm: `calc(100% - ${ drawerWidth }px)` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    sx={{
                        display: { sm: 'none' }
                    }}
                >
                    <MenuOutlined /> 
                </IconButton>

                <Grid container
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography> JournalApp </Typography>
                    <Button 
                        onClick={ onLogout }
                    >
                        <LogoutOutlined color='error'/>
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
