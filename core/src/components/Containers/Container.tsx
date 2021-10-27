import React, { ReactElement } from 'react';

interface Props {
	children: Array<ReactElement> | ReactElement | string;
}

export default function Container({ children }: Props): ReactElement {
	return <div className="container">{children}</div>;
}
