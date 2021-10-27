import React, { ReactElement, useMemo, useState } from 'react';
import { COLOR_TYPE } from '../../utils/utils';
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';

interface Props {
	color?: COLOR_TYPE;
	size?: number;
}

export default function Checkbox({ color = 'primary', size = 18 }: Props): ReactElement {
	const [ checked, setChecked ] = useState(false);
	const css = useMemo(
		() => {
			if (checked) {
				return `checkbox border-${color} bg-${color}`;
			} else {
				return `checkbox border-${color} outlined`;
			}
		},
		[ color, checked ]
	);
	const style = useMemo(() => ({ width: `${size}px`, height: `${size}px` }), [ size ]);

	return (
		<div className="checkbox-container">
			<Flex
				jc="center"
				ai="center"
				className={css}
				style={style}
				onClick={() => {
					setChecked(!checked);
				}}
			>
				{checked ? <Icon name="check" style={{ fontSize: `${Math.round(size / 2)}px` }} /> : ''}
			</Flex>
		</div>
	);
}
