import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/Storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { PageError } from 'widgets/PageError';

export default {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorLight = Template.bind({});
PageErrorLight.args = {

};
export const PageErrorDark = Template.bind({});
PageErrorDark.args = {

};
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
