import { Button, Typography } from '@mui/material';

export const ButtonLink = ({ name = '', onNavigate }) => {
    return (
        <Button
            sx={{
                textTransform: 'none', "&:hover": {
                    backgroundColor: "transparent",
                },
            }}
            variant='text'
            onClick={ onNavigate }
        >
            <Typography
                sx={{ textDecoration: 'underline' }}
                color={'inherit'}
            >
               { name }
            </Typography>
        </Button>
    )
};
