import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  icon?: React.ReactNode;
  label?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    placeholder,
    type = 'text',
    checked,
    id,
    width,
    label,
    icon,
    ...rest
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputContainer
      $checked={checked}
      $width={width}
      $isFocused={isFocused}
      $inputType={type}
    >
      {icon && icon}
      {label && (
        <label id={id} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        ref={ref}
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  );
};

export default forwardRef(Input);
