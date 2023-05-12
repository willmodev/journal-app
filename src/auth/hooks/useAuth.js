import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetStateAuth } from '../../store/auth';


export const useAuth = () => {
  
    const dispatch = useDispatch();

    const { status, errorMessage } = useSelector(state => state.auth);

    const isAuthenticating = useMemo(() => status === 'checking');


    const [isFormSubmit, setIsFormSubmit] = useState(false);
    
    // useEffect(() => {
    //     dispatch( resetStateAuth() );
    // }, [])
  
  
    return {
        errorMessage,
        isAuthenticating,
        isFormSubmit,
        setIsFormSubmit,
        dispatch
    }
};
