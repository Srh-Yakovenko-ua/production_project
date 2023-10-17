import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SideBarLight = Template.bind({});
SideBarLight.args = {

};
export const SideBarDark = Template.bind({});
SideBarDark.args = {

};
SideBarDark.decorators = [ThemeDecorator(Theme.DARK)];
