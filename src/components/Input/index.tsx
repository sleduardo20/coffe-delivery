import { InputHTMLAttributes, useState } from 'react';
import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  icon?: React.ReactNode;
  label?: string;
}

export function Input({
  name,
  placeholder,
  type = 'text',
  checked,
  id,
  width,
  label,
  icon,
  ...rest
}: InputProps) {
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
        type={type}
        placeholder={placeholder}
        name={name}
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  );
}
