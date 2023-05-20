import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {

        savingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
            
        },
        setNotes: (state, { payload }) => {
            state.notes = payload
            state.messageSaved = '';
        },
        setSaving: (state, action) => {
            state.isSaving = true;
        },
        updateNote: (state, { payload }) => {

            state.isSaving = false;

            state.notes = state.notes.map( note => {
                if (note.id == payload.id) {
                    return payload;
                }
                return note;
            });

            state.messageSaved = `La nota ${ payload.title } ha sido actualizada correctamente.`
        },
        setPhotosToActiveNote: (state, {payload} ) => {
            state.isSaving = false;
            state.active.imageUrls = [  ...state.active.imageUrls, ...payload ];

        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, {payload}) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== payload.id);
        }

    },
})

// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote, 
    clearNotesLogout,
    deleteNoteById,
    savingNewNote, 
    setActiveNote, 
    setNotes, 
    setPhotosToActiveNote,
    setSaving, 
    updateNote, 
} = journalSlice.actions