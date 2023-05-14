import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetStateAuth } from '../../store/auth';


export const useAuth = () => {
  
    const dispatch = useDispatch();

    const { errorMessage } = useSelector(state => state.auth);
    const [isFormSubmit, setIsFormSubmit] = useState(false);

    return {
        errorMessage,
        isFormSubmit,
        setIsFormSubmit,
        dispatch
    }
};
