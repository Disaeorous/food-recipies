import { useEffect, useState } from "react"

const useForm = (callBack, validateInput) => {
	const userInfo = {
		name: '',
		email: '',
		password: '',
		passwordRepeat: ''
	};

	const [values, setValues] = useState({
		user: userInfo,
		test: '',
	});

	const [errors, setErrors] = useState({});
	const [formSubmited, setFormSubmited] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		
    setValues(current => {
			console.log(`Name: ${name}, Value: ${value}`);

      return {
        ...current,
        user: {
          ...current.user,

					// override value for nested {userInfo} object
					// 👇️ name, email, pass ... property 
          [name]: value,
        }, [name]: value,
      };
    });
  };

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(validateInput(values));
		setFormSubmited(prev => prev = true);
	}

	// TODO: Refactor this 'awesome' piece of code
	const objectConditionAuth = (Object.keys(errors).length === 1 && Object.keys(errors.user).length === 0);
	const objectConditionLogin = (Object.keys(errors).length === 2 && Object.keys(errors.user).length === 1);
	
	useEffect(() => {

		if (objectConditionAuth && formSubmited) {
			callBack();
		}
		if (objectConditionLogin && formSubmited) {
			callBack();
		}
		
	}, [errors]);

	return { values, handleChange, handleSubmit, errors, formSubmited }
}

export default useForm;