import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';

export const SideBar = ({ drawerWidth = 240 }) => {
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
                    <Typography variant='h6' component={'div'}>
                        Willinton Mora
                    </Typography>
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
