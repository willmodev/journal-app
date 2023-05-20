import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setDeleting, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice';
import { fileDelete, loadNotes } from '../../journal';
import { fileUpload } from '../../journal/helpers/fileUpload';


export const startNewNote = () => {
    return async( dispatch, getState ) => {


        dispatch( savingNewNote() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime()
        }


        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
        await setDoc(newDoc, newNote);

        const noteResult = { id: newDoc.id, ...newNote }
        
        dispatch( addNewEmptyNote( noteResult ) );
        dispatch( setActiveNote( noteResult ) );

    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        const notes = await loadNotes(uid);

        dispatch( setNotes(notes) );


    }
}

export const startSaveNotes = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;


        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);

        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch( updateNote(note) );

    }
}


export const startUploadingFiles = (files = []) => {
    return async( dispatch ) => {

        dispatch( setSaving() );

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) );
        }
        
        const photosUrls = await Promise.all( fileUploadPromises );

        // Todo 
        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setDeleting() );

        const { active: note } = getState().journal;
        const { uid } = getState().auth;

        const fileDeletePromises = [];

        for (const img of note.imageUrls) {
            fileDeletePromises.push(fileDelete(img));
        }

        await Promise.all( fileDeletePromises );

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );

        try {      
            await deleteDoc( docRef );
            dispatch( deleteNoteById(note) );
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al eliminar la nota: '+error.message);
            
        }
    }
}
