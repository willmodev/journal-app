import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from '../components/';
import { useForm } from '../../hooks';
import { options } from '../../utilities';
import { useEffect } from 'react';
import { setActiveNote,startSaveNotes } from '../../store';
import { UploadFileOutlined } from '@mui/icons-material';


export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved } = useSelector( state => state.journal);

    const { title, date: time, body, onInputChange, formState } = useForm( note );

    const date = useMemo(() => {
        return new Date(time);
    }, [time]);

    const formattedDate = date.toLocaleString('es-ES', options);

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState])

    useEffect(() => {
        if( messageSaved.length > 0 )
            Swal.fire('Nota Actualizada', messageSaved, 'success');
    },[messageSaved])

    const onSaveNote = () => {
        dispatch( startSaveNotes() )
        
    }

    return (
        <Grid container
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{ formattedDate }</Typography>
            </Grid>

            <Grid item>
                <input 
                    type="file"
                    multiple 
                    style={{ display: 'none' }}
                />
                <IconButton
                    color='primary'
                    size={'medium'}
                    sx={{ p: 0 }}
                >
                    <UploadFileOutlined />
                </IconButton>

                <Button
                    onClick={ onSaveNote }
                >
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
                    name='title'
                    value={ title }
                    onChange={ onInputChange }
                />
                <TextField 
                    type='text'
                    variant='outlined'
                    placeholder='¿Qué sucedió el día de hoy?'
                    multiline
                    minRows={5}
                    fullWidth
                    name='body'
                    value={ body }
                    onChange={ onInputChange }
                />
                <ImageGallery />
            </Grid>
        </Grid>
    );
};
