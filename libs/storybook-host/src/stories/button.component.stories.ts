import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "@alfabit/button";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent
}

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
  args: {
    text: 'Action'
  }
};

export const SecondaryButton: Story = {};
