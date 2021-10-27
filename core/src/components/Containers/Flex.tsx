import React, { HTMLAttributes, ReactElement, useMemo } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
	children: Array<ReactElement> | ReactElement | string;
	className?: string;
	jc?: string;
	ai?: string;
	gap?: string;
	direction?: 'row' | 'col'; // 'row | col'
	wrap?: boolean;
	style?: Object;
	props?: Object;
}

export default function Flex({
	children,
	className = '',
	jc = 'flex-start',
	ai = 'center',
	gap = '0px 0px',
	wrap = true,
	style,
	direction = 'row',
	...props
}: Props): ReactElement {
	const css = useMemo(
		() => {
			return `flex jc-${jc} ai-${ai} ${className} flex-${direction} flex-${wrap ? 'wrap' : 'nowrap'}`;
		},
		[ className, ai, jc, direction, wrap ]
	);

	const customStyle = useMemo(
		() => {
			return {
				...style,
				gap
			};
		},
		[ style, gap ]
	);

	return (
		<div className={css} {...props} style={customStyle}>
			{children}
		</div>
	);
}
