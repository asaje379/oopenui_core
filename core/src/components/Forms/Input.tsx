import React, { HTMLAttributes, ReactElement, useMemo } from 'react';
import { _COLORS_ } from '../../utils/utils';
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
	label?: string;
	color?: string;
	padding?: string;
	margin?: string;
	borderRadius?: string;
	borderColor?: string;
	style?: Object;
	labelStyle?: Object;
	inputStyle?: Object;
	className?: string;
	labelClassName?: string;
	inputClassName?: string;
	type?: string;
	icon?: string;
	inputIcon?: string;
	inputIconPosition?: 'left' | 'right' | '';
	onIconClick?: any;
	value?: string | null;
}

export default function Input({
	label,
	color = 'primary',
	padding = '7px 5px',
	margin = '10px 0',
	borderRadius = '3px',
	style,
	labelStyle,
	inputStyle,
	className,
	labelClassName,
	inputClassName,
	icon,
	inputIcon,
	inputIconPosition = '',
	onIconClick = () => {},
	value = null,
	onChange = () => {},
	...props
}: InputProps): ReactElement {
	const inputNewStyle = useMemo(() => ({ ...inputStyle, padding, borderRadius }), [
		inputStyle,
		padding,
		borderRadius
	]);

	const labelCSS = useMemo(
		() => {
			if (_COLORS_.includes(color)) {
				return `label text-${color} ${labelClassName ? labelClassName : ''}`;
			}
			return `label ${labelClassName ? labelClassName : ''}`;
		},
		[ color, labelClassName ]
	);
	return (
		<div style={{ ...style, margin }} className={className}>
			{label && (
				<div className={labelCSS} style={labelStyle}>
					{icon && <Icon name={icon} />} {label}
				</div>
			)}
			<div className={`input-${inputIconPosition}-container border-${color}`} style={inputNewStyle}>
				{inputIcon &&
				inputIconPosition === 'left' && (
					<Flex ai="center" jc="center">
						<Icon name={inputIcon} onClick={onIconClick} />
					</Flex>
				)}
				{value !== null ? (
					<input className="input" {...props} value={value} onChange={(e: any) => onChange(e.target.value)} />
				) : (
					<input className="input" {...props} />
				)}
				{inputIcon &&
				inputIconPosition === 'right' && (
					<Flex ai="center" jc="center">
						<Icon name={inputIcon} onClick={onIconClick} />
					</Flex>
				)}
			</div>
		</div>
	);
}
