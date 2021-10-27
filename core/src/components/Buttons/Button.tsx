import React, { HTMLAttributes, ReactElement, useMemo } from 'react';
import { COLOR_TYPE } from '../../utils/utils';
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';

interface Props extends HTMLAttributes<HTMLElement> {
	children: ReactElement | Array<ReactElement> | string;
	color?: COLOR_TYPE;
	expand?: boolean;
	outlined?: boolean;
	rounded?: boolean;
	raised?: boolean;
	flatted?: boolean;
	padding?: string;
	margin?: string;
	textSize?: string;
	style?: Object;
	className?: string;
	icon?: string;
	radius?: string;
	iconPosition?: 'left' | 'right';
	iconSpacing?: 1 | 2 | 3 | 4 | 5;
	disabled?: boolean;
}

export default function Button({
	children,
	color = 'primary',
	expand = false,
	outlined = false,
	rounded = false,
	raised = false,
	flatted = false,
	padding = '5px 7px',
	margin = '0',
	radius = '3px',
	textSize = '14px',
	style,
	className,
	icon,
	iconPosition = 'left',
	iconSpacing = 2,
	disabled = false,
	...props
}: Props): ReactElement {
	const css = useMemo(
		() => {
			let newCss = [ 'button' ];

			if (color) {
				if (flatted) {
					newCss.push(`text-${color}`);
				} else if (outlined) {
					newCss.push(`border border-${color} text-${color} outlined`);
				} else {
					newCss.push(`bg-${color} border-${color}`);
				}
			}

			if (expand) {
				newCss.push('expand');
			}

			if (rounded) {
				newCss.push('rounded');
			}

			if (raised) {
				newCss.push('raised');
			}

			if (disabled) {
				newCss.push('bg-gray border-gray');
			}
			return [ ...newCss, className ].join(' ');
		},
		[ color, outlined, expand, rounded, raised, className, flatted, disabled ]
	);

	const newStyle = useMemo(() => ({ ...style, padding, margin, borderRadius: radius, fontSize: textSize }), [
		style,
		padding,
		margin,
		radius,
		textSize
	]);

	const childrenMargin = useMemo(
		() => {
			if (icon) {
				return iconPosition === 'left' ? `ml-${iconSpacing}` : `mr-${iconSpacing}`;
			}
			return '';
		},
		[ icon, iconPosition, iconSpacing ]
	);

	return (
		<button className={css} style={newStyle} disabled={disabled} {...props}>
			<Flex ai="center" jc="center">
				<div>{icon && iconPosition === 'left' && <Icon name={icon} />}</div>
				<div className={childrenMargin}>{children}</div>
				<div>{icon && iconPosition === 'right' && <Icon name={icon} />}</div>
			</Flex>
		</button>
	);
}
