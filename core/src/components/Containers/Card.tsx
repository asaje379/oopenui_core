import React, { ReactElement, useMemo } from 'react';

interface Props {
	children: Array<ReactElement> | ReactElement | string;
	elevation?: number;
	radius?: number;
	padding?: string;
	margin?: string;
	color?: string;
	props?: Object;
	style?: Object;
	className?: string;
}

export default function Card({
	children,
	elevation = 0,
	radius = 3,
	color = 'white',
	padding = '5px',
	margin = '5px',
	className = '',
	style,
	...props
}: Props): ReactElement {
	const customStyle = useMemo(
		() => {
			const newStyle: any = { ...style };
			newStyle.borderRadius = radius + 'px';
			newStyle.boxShadow = `0 ${elevation}px ${elevation === 0 ? '3' : elevation}px 0 #0000007F`;
			newStyle.padding = padding;
			newStyle.margin = margin;
			return newStyle;
		},
		[ style, elevation, radius, padding, margin ]
	);

	const css = useMemo(
		() => {
			return `bg-${color} ${className}`;
		},
		[ className, color ]
	);

	return (
		<div className={css} style={customStyle} {...props}>
			{children}
		</div>
	);
}
