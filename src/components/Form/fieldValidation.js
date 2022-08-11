function fieldValidation(values) {
	let errors = {
		user: {},
	};
	
	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (!values.user?.name.trim()) {
		errors.user.name = 'Username is required';
	};
	if (!values.test.trim()) {
		errors.test = 'Test is required';
	};

	if (!values.user?.email.trim()) {
		errors.user.email = 'Email is required';
	} else if (!mailFormat.test(values.user.email)) {
		errors.user.email = "Email addres is invalid";
	}

	if (!values.user?.password.trim()) {
		errors.user.password = 'Password is required';
	} else if (values.user.password.length < 6) {
		errors.user.password = "Password should be more than 6 characters";
	}

	if (!values.user?.passwordRepeat.trim()) {
		errors.user.passwordRepeat = 'Password is required';
	} else if (values.user?.passwordRepeat !== values.user?.password) {
		errors.user.passwordRepeat = "Password don't match. Try again";
	}

	return errors;
}

export default fieldValidation