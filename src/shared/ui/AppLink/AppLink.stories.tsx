import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkLightSecondary = Template.bind({});
AppLinkLightSecondary.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Link',
};
export const AppLinkDarkSecondary = Template.bind({});
AppLinkDarkSecondary.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Link',
};
AppLinkDarkSecondary.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkLightPrimary = Template.bind({});
AppLinkLightPrimary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Link',
};

export const AppLinkDarkPrimary = Template.bind({});
AppLinkDarkPrimary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Link',
};
AppLinkDarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];
