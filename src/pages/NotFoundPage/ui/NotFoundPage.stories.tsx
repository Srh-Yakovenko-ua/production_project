import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { NotFoundPage } from 'pages/NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {

};

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {

};
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
