import { FC } from 'react';
import { ButtonProps, OUIButton } from './Buttons/Button';
import { IconProps, OUIIcon } from './Tips/Icon';
import * as utils from './utils/utils';

export const Button: FC<ButtonProps> = OUIButton;
export const Icon: FC<IconProps> = OUIIcon;
export const _ = utils;
