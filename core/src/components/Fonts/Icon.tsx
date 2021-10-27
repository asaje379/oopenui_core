import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { HTMLAttributes, ReactElement, useEffect, useMemo, useState } from 'react';
import { capitalize, COLOR_TYPE, _COLORS_ } from '../../utils/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	name: string;
	color?: COLOR_TYPE | string;
	style?: Object;
	className?: string;
	onClick?: any;
}

export default function Icon({ name, color, style, className, onClick }: Props): ReactElement | null {
	const [ icon, setIcon ] = useState<any>(null);

	const css = useMemo(
		() =>
			[
				'pointer',
				color && _COLORS_.includes(color) ? `text-${color} ${className ? className : ''}` : className
			].join(' '),
		[ color, className ]
	);

	const newStyle = useMemo(() => (color && !_COLORS_.includes(color) ? { ...style, color } : style), [
		color,
		style
	]);

	useEffect(
		() => {
			const cb = async () => {
				const newName = `fa${capitalize(name)}`;
				const solids: any = await import('@fortawesome/free-solid-svg-icons');
				if (newName in solids) setIcon(solids[newName]);
				else {
					const regulars: any = await import('@fortawesome/free-regular-svg-icons');
					if (newName in regulars) setIcon(regulars[newName]);
					else {
						const brands: any = await import('@fortawesome/free-brands-svg-icons');
						if (newName in brands) setIcon(brands[newName]);
					}
				}
			};
			cb();
		},
		[ name ]
	);

	if (!icon) return null;

	return <FontAwesomeIcon icon={icon} style={newStyle} className={css} onClick={onClick} />;
}
