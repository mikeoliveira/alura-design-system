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

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const MultilineDisabled: Story = {
  args: {
    ...Primary.args,
    multiline: true,
    disabled: true,
  },
};


export const PrimaryWithLabelDisabled: Story = {
  args: {
    label: 'Label',
    id: '3',
    disabled: true,
  },
};

export const MultilineWithLabelDisabled: Story = {
  args: {
    ...Primary.args,
    multiline: true,
    label: 'Label',
    id: '4',
    disabled: true,
  },
};
