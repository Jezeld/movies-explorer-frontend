import {useState, useCallback} from 'react';

function useValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: e.target.validationMessage});
        setIsValid(e.target.closest('form').checkValidity());
        setIsDisabled('')
    };

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = true, newIsDisabled = true) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsDisabled(newIsDisabled);
  }, [setValues, setErrors, setIsValid, setIsDisabled]);


    return {values, errors, isValid, isDisabled, setValues, setErrors, setIsValid, handleChange, resetForm};
}

export default useValidation ;



// import {useCallback, useState} from 'react'

// function useValidation() {
// 	const [values, setValues] = useState({})
// 	const [errors, setErrors] = useState({})
// 	const [isValid, setIsValid] = useState(true)
// 	const handleChange = (e) => {
// 		const {name, value} = e.target
// 		setValues({...values, [name]: value})
// 		setErrors({...errors, [name]: e.target.validationMessage})
// 		setIsValid(e.target.closest('form').checkValidity())
// 	}
// 	const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
// 		setValues(newValues)
// 		setErrors(newErrors)
// 		setIsValid(newIsValid)
// 	}, [setValues, setErrors, setIsValid])

// 	return {values, handleChange, errors, isValid, resetForm, setValues, setIsValid}
// }

// export default useValidation