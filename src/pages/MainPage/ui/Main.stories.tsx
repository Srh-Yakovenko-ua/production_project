import { ComponentMeta, ComponentStory } from '@storybook/react';
import Main from 'pages/MainPage/ui/Main';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'pages/MainPage',
  component: Main,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const MainPageLight = Template.bind({});
MainPageLight.args = {

};

export const MainPageDark = Template.bind({});
MainPageDark.args = {

};
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
