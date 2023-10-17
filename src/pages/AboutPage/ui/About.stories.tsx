import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import About from './About';

export default {
  title: 'pages/AboutPage',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const AboutLight = Template.bind({});
AboutLight.args = {

};

export const AboutDark = Template.bind({});
AboutDark.args = {

};
AboutDark.decorators = [ThemeDecorator(Theme.DARK)];
