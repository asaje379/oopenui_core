import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';
import { ButtonProps } from '../src/Buttons/Button';

const meta: Meta = {
	title: 'Components',
	component: Button,
	argTypes: {
		children: {
			control: {
				type: 'text'
			}
		}
	},
	parameters: {
		controls: { expanded: true }
	}
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
