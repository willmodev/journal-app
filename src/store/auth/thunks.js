import { registerUserWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { checkingCredential, login, logout } from './authSlice'



export const checkingAuthentication = (email, password) => {
    return async( dispatch ) => {

        dispatch( checkingCredential() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredential() );

        const result = await signInWithGoogle();

        if (!result.ok) return dispatch ( logout(result) )

        dispatch ( login(result) )

    }
}


export const startRegisterUserWithEmailAndPassword = ({displayName, email, password}) => {
    return async( dispatch ) => {

        dispatch( checkingCredential() )

        const result = await registerUserWithEmailAndPassword({displayName, email, password});

        console.log(result);

        if( !result.ok ) return dispatch( logout(result) );

        dispatch( login(result) );
        
    }
}