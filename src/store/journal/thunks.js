import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from './journalSlice';
import { loadNotes } from '../../journal';


export const startNewNote = () => {
    return async( dispatch, getState ) => {


        dispatch( savingNewNote() );

        const { uid } = getState().auth;

        const newNote = {
            title: 'Mi primera entrevista',
            body: 'Fue una experiencia increible!!',
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