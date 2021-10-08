import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useLayoutEffect, useMemo, useState } from 'react';
import { capitalize } from '../utils/utils';

export interface IconProps {
	name: string;
	color: string;
	[x: string]: any;
}

export const OUIIcon: FC<IconProps> = ({ name, color, ...props }: IconProps) => {
	const [ icon, setIcon ] = useState<any>(null);

	const faName = useMemo(
		() => {
			const splitted = name.split('-').map((it) => capitalize(it));
			return [ 'fa', ...splitted ].join('');
		},
		[ name ]
	);

	useLayoutEffect(
		() => {
			import('@fortawesome/free-solid-svg-icons').then((solids) => {
				import('@fortawesome/free-regular-svg-icons').then((regulars) => {
					import('@fortawesome/free-brands-svg-icons').then((brands) => {
						const icons: any = { ...solids, ...regulars, ...brands };
						setIcon(icons[faName]);
					});
				});
			});
		},
		[ name ]
	);

	return <FontAwesomeIcon icon={icon} {...props} />;
};
