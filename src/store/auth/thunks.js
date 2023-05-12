import { FirebaseAuth, loginWithEmailAndPassword, registerUserWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { checkingCredential, login, logout, resetState } from './authSlice'



export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredential() );
    }
}

export const resetStateAuth = () => {
    return async( dispatch ) => {
        dispatch( resetState() );
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

        if( !result.ok ) return dispatch( logout(result) );

        dispatch( login(result) );
        
    }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredential() );

        const result = await loginWithEmailAndPassword( {email, password} );

        if ( !result.ok ) return dispatch( logout(result) );

        dispatch( login(result) );

    }

}

export const startLogout = () => {
    return async( dispatch ) => {
        await FirebaseAuth.signOut();

        dispatch( logout() )
    }
}