import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from 'shared/ui/Loader/Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderLight = Template.bind({});
LoaderLight.args = {

};

export const LoaderDark = Template.bind({});
LoaderLight.args = {

};
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
