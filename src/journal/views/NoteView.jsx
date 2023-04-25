import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

export const NoteView = () => {
    const date = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleString('es-ES', options);
    return (
        <Grid container
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{ formattedDate }</Typography>
            </Grid>
            <Grid item>
                <Button>
                    <SaveOutlined  sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type='text'
                    variant='outlined'
                    placeholder='Ingrese un título'
                    label='Título'
                    fullWidth
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField 
                    type='text'
                    variant='outlined'
                    placeholder='¿Qué sucedió el día de hoy?'
                    multiline
                    minRows={5}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
};
