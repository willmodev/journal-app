import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layouts';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store';
import { CheckingAuth } from '../../ui/components';

export const HomePage = () => {
    
    const { isSaving, active } = useSelector( state => state.journal );
    const dispatch = useDispatch();

    const onAddNewNote = () => {

        dispatch( startNewNote() );

    }

    if (isSaving) return (<CheckingAuth />);

    return (
        <JournalLayout>

            {
                (!!active) ? <NoteView /> : <NothingSelectedView />
            }

            <IconButton
                onClick={ onAddNewNote }
                size='large'
                sx={{
                    position: 'fixed',
                    right: 50,
                    bottom: 50,
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.light' }
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
};
