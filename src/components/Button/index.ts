import { Button as ButtonRoot } from './Button';
import { ButtonText } from './Button.Text';
import { ButtonIcon } from './Button.Icon';

export const Button = Object.assign(ButtonRoot, {
  Text: ButtonText,
  Icon: ButtonIcon,
});
