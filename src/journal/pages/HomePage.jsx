import { IconButton } from '@mui/material';
import { JournalLayout } from '../layouts';
import { NoteView } from '../views';
import { AddOutlined } from '@mui/icons-material';

export const HomePage = () => {
    return (
        <JournalLayout>
            {/* <NothingSelectedView /> */}
            <NoteView />

            <IconButton
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
