import { Field as FieldRoot } from './Field';
import { FieldLabel } from './Field.Label';
import { FieldInput } from './Field.Input';
import { FieldError } from './Field.Error';

export const Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Input: FieldInput,
  Error: FieldError,
});
