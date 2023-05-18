import { Grid, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const SideBarItem = ({ id, title, date, body }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        const note = { id, title, date, body };
        dispatch( setActiveNote(note) );
    }

    return (
        <ListItemButton key={id} onClick={ onClickNote }>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>

            <Grid container>
                <ListItemText primary={ title }/>
                <ListItemText secondary={body} />
            </Grid>
        </ListItemButton>
    );
};
