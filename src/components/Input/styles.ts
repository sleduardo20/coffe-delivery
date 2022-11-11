import styled from 'styled-components';

interface InputContainerProps {
  $width?: number;
  $inputType: string;
  $isFocused: boolean;
  $checked?: boolean;
}
export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  position: relative;
  align-items: center;
  gap: 1.2rem;
  height: 4.2rem;
  border-radius: 0.4rem;
  background: ${({ theme, $checked }) =>
    $checked ? theme.purpleLight : theme.input};
  padding: 1.2rem;

  svg {
    color: ${({ theme }) => theme.purple};
    size: 16px;
  }

  label {
    font-size: 1.2rem;
    text-transform: uppercase;
    pointer-events: none;
  }

  width: ${({ $width, $inputType }) =>
    $inputType === 'radio' ? '17.8rem' : $width ? `${$width}px` : '100%'};

  border: 0.1rem solid
    ${({ theme, $isFocused }) => ($isFocused ? theme.purple : theme.button)};

  border: 0.1rem solid
    ${({ theme, $checked }) => ($checked ? theme.purpleDark : theme.button)};

  input {
    width: 100%;
    height: 100%;
    display: inline-block;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.text};
    background: none;

    appearance: ${({ $inputType }) =>
      $inputType === 'radio' ? 'none' : 'visible'};

    cursor: ${({ $inputType }) =>
      $inputType === 'radio' ? 'pointer' : 'auto'};

    position: ${({ $inputType }) =>
      $inputType === 'radio' ? 'absolute' : 'static'};

    &::placeholder {
      color: ${({ theme }) => theme.label};
    }
  }
`;
