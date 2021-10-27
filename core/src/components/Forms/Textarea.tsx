import React, { HTMLAttributes, ReactElement, useMemo } from 'react';
import { _COLORS_ } from '../../utils/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	label?: string;
	color?: string;
	padding?: string;
	margin?: string;
	borderRadius?: string;
	borderColor?: string;
	style?: Object;
	labelStyle?: Object;
	textareaStyle?: Object;
	className?: string;
	labelClassName?: string;
	textareaClassName?: string;
	type?: string;
	rows?: number;
	value?: string | null;
	onChange?: any;
}

export default function Textarea({
	label,
	color = 'primary',
	padding = '10px',
	margin = '10px 0',
	borderRadius = '3px',
	style,
	labelStyle,
	textareaStyle,
	className,
	labelClassName,
	textareaClassName,
	rows = 5,
	value = null,
	onChange = () => {},
	...props
}: Props): ReactElement {
	const textareaCSS = useMemo(
		() => {
			if (_COLORS_.includes(color)) {
				return `textarea border-${color} ${textareaClassName ? textareaClassName : ''}`;
			}
			return `textarea ${textareaClassName ? textareaClassName : ''}`;
		},
		[ color, textareaClassName ]
	);

	const textareaNewStyle = useMemo(() => ({ ...textareaStyle, padding, borderRadius }), [
		textareaStyle,
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
					{label}
				</div>
			)}
			{value !== null ? (
				<textarea
					rows={rows}
					className={textareaCSS}
					style={textareaNewStyle}
					value={value}
					onChange={(e: any) => onChange(e.target.value)}
					{...props}
				/>
			) : (
				<textarea
					rows={rows}
					className={textareaCSS}
					style={textareaNewStyle}
					onChange={(e: any) => onChange(e.target.value)}
					{...props}
				/>
			)}
		</div>
	);
}
