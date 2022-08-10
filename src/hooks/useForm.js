import { useState } from "react"

const useForm = () => {
	const userInfo = {
		name: '',
		email: '',
		password: '',
		passwordRepeat: ''
	};

	const [values, setValues] = useState({
		user: userInfo,
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;

		console.log(`Name: ${name}, Value: ${value}`);
		setValues({
			...values,
			[name]: value
		});
	};

	return { values, handleChange }
}

export default useForm;