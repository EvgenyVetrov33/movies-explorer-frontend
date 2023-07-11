import React from 'react';

export function useFormWithValidation() {

	const [values, setValues] = React.useState({});
	const [errors, setErrors] = React.useState({});
	const [isValid, setIsValid] = React.useState(false);

	//---ОБРАБОТЧИКИ---
	function handleChange(e) {
		const input = e.target;
		const name = input.name;
		const value = input.value;

		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: input.validationMessage });
		setIsValid(input.closest('form').checkValidity());
	};

	return { values, errors, isValid, handleChange, setValues, setIsValid, setErrors };
};

// export function useFormWithValidation(name, value) {
// 	let errors = {};
// 	if (name === 'email') {
// 		if (!value) {
// 			errors = { [name]: 'Email обязателен' };
// 		} else if (!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value)) {
// 			errors = { [name]: 'Некорректный email' };
// 		}
// 	}
// 	if (name === 'password') {
// 		if (!value) {
// 			errors = { [name]: 'Введите пароль' };
// 		}
// 	}
// 	if (name === 'name') {
// 		if (!value) {
// 			errors = { [name]: 'Укажите имя' };
// 		} else if (!/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/gm.test(value)) {
// 			errors = { [name]: 'Укажите корректное имя' };
// 		} else if (value.length < 1) {
// 			errors = { [name]: 'Укажите имя не короче 2 символов' };
// 		}
// 	}

// 	return errors;
// }

// export default useFormWithValidation;
