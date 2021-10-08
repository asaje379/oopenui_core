import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon } from '../src';
import { IconProps } from '../src/Tips/Icon';

const meta: Meta = {
	title: 'Components',
	component: Icon,
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

const Template: Story<IconProps> = (args) => <Icon {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
	name: 'camera-retro'
};
