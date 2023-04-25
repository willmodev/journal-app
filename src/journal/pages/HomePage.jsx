import { Typography } from '@mui/material';
import { JournalLayout } from '../layouts/JournalLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { NoteView } from '../views/NoteView';

export const HomePage = () => {
    return (
        <JournalLayout>
            {/* <NothingSelectedView /> */}
            <NoteView />
        </JournalLayout>
    );
};
