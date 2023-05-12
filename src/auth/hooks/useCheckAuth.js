import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../../firebase';
import { useEffect } from 'react';
import { login, logout } from '../../store/auth';
import { onAuthStateChanged } from 'firebase/auth';

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('me ejecuté', status);
        
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout({ errorMessage: null }));

            const { uid, displayName, email, photoURL } = user;
            dispatch(login({ uid, displayName, email, photoURL }));
        })
    }, [])


    return {
        status
    }
};
