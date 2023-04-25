import { LogoutOutlined } from '@mui/icons-material';
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from "react";

export const NavBar = ({ drawerWidth = 240 }) => {
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
                    <Button >
                        <LogoutOutlined color='error'/>
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
