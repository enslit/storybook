import React from 'react';

export interface ButtonProps {
  /**
   * Тип кнопки
   */
  type?: 'button' | 'submit';
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children?: string | React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is disabled action?
   */
  disabled?: boolean;
  /**
   * Icon in button contents
   */
  icon?: string;
  /**
   * Place icon before or after the button content?
   */
  iconPosition?: 'start' | 'end';
}
