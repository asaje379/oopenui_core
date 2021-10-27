import React, { ReactElement, useState } from 'react';
import Input, { InputProps } from './Input';

interface Props extends InputProps {}

export default function Password({ ...props }: Props): ReactElement {
	const [ icon, setIcon ] = useState('eye');
	const [ type, setType ] = useState('password');

	return (
		<Input
			type={type}
			{...props}
			inputIcon={icon}
			inputIconPosition="right"
			onIconClick={() => {
				setIcon((icon) => (icon === 'eye' ? 'eyeSlash' : 'eye'));
				setType((type) => (type === 'password' ? 'text' : 'password'));
			}}
		/>
	);
}
