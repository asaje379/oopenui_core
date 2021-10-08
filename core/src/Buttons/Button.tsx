import React, { FC, ReactChild } from 'react';

export interface ButtonProps {
	color?: string;
	children: ReactChild;
}

export const OUIButton: FC<ButtonProps> = ({ color, children }) => {
	return <button style={{ backgroundColor: color }}>{children}</button>;
};
