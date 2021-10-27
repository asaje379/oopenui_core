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
	selectStyle?: Object;
	className?: string;
	labelClassName?: string;
	selectClassName?: string;
	type?: string;
	values?: Array<any>;
	valueLabel?: string;
	valueId?: string;
	value?: string | null;
}

export default function Select({
	label,
	color = 'primary',
	padding = '10px 0',
	margin = '10px 0',
	borderRadius = '3px',
	style,
	labelStyle,
	selectStyle,
	className,
	labelClassName,
	selectClassName,
	value = null,
	values = [],
	valueLabel = '',
	valueId = '',
	onChange = () => {},
	...props
}: Props): ReactElement {
	const selectCSS = useMemo(
		() => {
			if (_COLORS_.includes(color)) {
				return `select border-${color} ${selectClassName ? selectClassName : ''}`;
			}
			return `select ${selectClassName ? selectClassName : ''}`;
		},
		[ color, selectClassName ]
	);

	const selectNewStyle = useMemo(() => ({ ...selectStyle, padding, borderRadius }), [
		selectStyle,
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

	const handleChange = (e: any) => {
		onChange(e.target.value);
	};

	return (
		<div style={{ ...style, margin }} className={className}>
			{label && (
				<div className={labelCSS} style={labelStyle}>
					{label}
				</div>
			)}
			{value !== null ? (
				<select value={value} className={selectCSS} style={selectNewStyle} onChange={handleChange} {...props}>
					<option value="" disabled>
						---
					</option>
					{values.length === 0 && <option value="">Aucun élément</option>}
					{values.map((item: any, index) => (
						<option key={index} value={item[valueId]}>
							{item[valueLabel]}
						</option>
					))}
				</select>
			) : (
				<select className={selectCSS} style={selectNewStyle} onChange={handleChange} {...props}>
					{value === null && (
						<option key={null} selected>
							---
						</option>
					)}
					{values.map((item: any, index) => (
						<option key={index} value={item[valueId]}>
							{item[valueLabel]}
						</option>
					))}
				</select>
			)}
		</div>
	);
}
