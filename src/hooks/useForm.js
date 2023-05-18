import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});


    useEffect(() => {
        createValidators();
    },[formState])

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckValues = {}

        for (const formField of Object.keys(formValidations))
        {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckValues );
    }

    // const isFormValid = useMemo(() => {

    //     for (const formField of Object.keys(formValidation)) {
    //         if (formValidation[formField] !== null ) return false; 
    //     }
    //     return true;
    // }).
    
    /* El método every() de JavaScript devuelve true si todos los elementos de la matriz pasan la función
    de prueba proporcionada, false en caso contrario.  */
    
    const isFormValid = useMemo(() => {
        return Object.values(formValidation).every((value) => value === null);
    });
      

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}