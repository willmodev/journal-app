import { TurnedInNot } from '@mui/icons-material';
import { Avatar, Box, Divider, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName, photoURL } = useSelector( state => state.auth);
    

    return(
        <Box
            component={'nav'}
            sx={{ 
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}
            >
                <Toolbar>
                    <Grid container direction={'row'} alignItems={'center'} spacing={2} >
                        <Grid item>
                        <Avatar alt={ displayName } src={ photoURL } />
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' component={'div'}>
                                { displayName }
                            </Typography>
                        </Grid>

                    </Grid>
                </Toolbar>

                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map(title => (
                            <ListItemButton key={ title }>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>

                                <Grid container>
                                    <ListItemText primary={title} />
                                    <ListItemText secondary='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' />
                                </Grid>
                            </ListItemButton>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    );
};
