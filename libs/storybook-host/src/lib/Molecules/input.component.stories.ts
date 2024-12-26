import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@alfabit-alura/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {},
};

export const Multiline: Story = {
  args: {
    ...Primary.args,
    multiline: true,
  },
};

export const PrimaryWithLabel: Story = {
  args: {
    label: 'Label',
    id: '1',
  },
};

export const MultilineWithLabel: Story = {
  args: {
    ...Primary.args,
    multiline: true,
    label: 'Label',
    id: '2',
  },
};
