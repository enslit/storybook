import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './ButtonProps';

const StyledButton = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.typography.fontFamily}, sans-serif;
  font-weight: 500;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  background-color: ${(props) => props.backgroundColor};

  ${(props) =>
    props.primary
      ? css`
          color: white;
          background-color: ${props.backgroundColor ||
          props.theme.palette.primary.main};
        `
      : css`
          color: ${(props) => props.theme.palette.text};
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
        `}

  ${(props) =>
    (props.size === 'large' &&
      css`
        font-size: 1.15rem;
        padding: ${(props) => props.theme.spacing(1.5)}
          ${(props) => props.theme.spacing(2.25)};
      `) ||
    (props.size === 'small' &&
      css`
        font-size: 0.75rem;
        padding: ${(props) => props.theme.spacing(0.5)}
          ${(props) => props.theme.spacing(1)};
      `) ||
    css`
      font-size: ${(props) => props.theme.typography.fontSize};
      padding: ${(props) => props.theme.spacing(1)}
        ${(props) => props.theme.spacing(2)};
    `}
  
  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      pointer-events: none;
      opacity: 0.5;
    `}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonWithRef(
    {
      type = 'button',
      primary = false,
      size = 'medium',
      backgroundColor,
      disabled = false,
      iconPosition = 'start',
      icon = '',
      children,
      ...restProps
    },
    ref
  ) {
    return (
      <StyledButton
        type={type}
        ref={ref}
        primary={primary}
        size={size}
        backgroundColor={backgroundColor}
        disabled={disabled}
        {...restProps}
      >
        {icon && iconPosition === 'start' && icon}
        {children}
        {icon && iconPosition === 'end' && icon}
      </StyledButton>
    );
  }
);
