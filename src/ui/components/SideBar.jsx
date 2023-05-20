import { Avatar, Box, Divider, Drawer, Grid, List, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName, photoURL } = useSelector(state => state.auth);
    const { notes = [] } = useSelector(state => state.journal);


    return (
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
                                {displayName}
                            </Typography>
                        </Grid>

                    </Grid>
                </Toolbar>

                <Divider />

                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    );
};
