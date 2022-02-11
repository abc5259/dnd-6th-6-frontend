import { Meta, Story } from '@storybook/react';
import Login from './Login';

export default {
  Login: 'Templates/Login',
  component: Login,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <Login {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '로그인',
  to: '/join',
};
