import { CSSProperties } from 'react';
import React from 'react';
import Styles from './Button.module.css';
import { cn } from '@/utils/cn';
import { buttonAttributes } from './type';
import { ThemeType } from '@/components/theme/context/ThemeProvider';

type CSSPropertiesWithFunction = {
  [K in keyof CSSProperties]: CSSProperties[K] | ((theme: ThemeType) => CSSProperties[K]);
};

type SX = CSSPropertiesWithFunction & {
  hoverBg?: (theme: ThemeType) => string | string;
  hoverColor?: (theme: ThemeType) => string | string;
};

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg' | undefined;
  variant?: 'outlined' | 'contained' | 'text';
  colorBg?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'white'
    | 'black'
    | 'gray'
    | 'muted'
    | 'transparent';
  rounded?:
    | 'rounded-node'
    | 'rounded-sm'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-xl'
    | 'rounded-full';
  disabled?: boolean;
  height?: string;
  width?: string;
  children?: React.ReactNode;
  theme?: ThemeType;
  sx?: SX;
};

const Button = ({ children, theme, sx, ...rest }: ButtonProps) => {
  const { size, variant, colorBg, rounded, height, width, ...buttonProps } = rest;

  const buttonVariant =
    variant === 'outlined'
      ? Styles.outline
      : variant === 'contained'
        ? Styles.contained
        : Styles.text;

  const buttoncolor = colorBg ? Styles[colorBg] : '';

  const buttonSize = size ? Styles[size] : '';

  const buttonRounded = rounded ? Styles[rounded] : '';

  const { background, color, hoverBg, hoverColor, ...restSX } = sx || {};

  // Generate the dynamic CSS styles
  const dynamicStyles = Object.entries(restSX || {})
    .map(([key, value]) => {
      if (typeof value === 'function' && theme) {
        return `${key}: ${value(theme)};`;
      }
      return `${key}: ${value};`;
    })
    .join(' ');
  return (
    <button
      style={{
        height: height,
        width: width
        // background: theme ? theme?.palette.primary[500] : 'inherit',
        // color: theme ? theme?.palette.primary.contrastText : 'inherit'
      }}
      className={cn(
        Styles.base,
        variant && buttonVariant,
        // colorBg && buttoncolor,
        size && buttonSize,
        rounded && buttonRounded,
        'button'
      )}
      // className="button"
      {...buttonProps}
    >
      <style jsx>
        {`
          .button {
            background: ${sx ? background : theme ? theme?.palette.primary[500] : 'inherit'};
            color: ${sx ? color : theme ? theme?.palette.primary.contrastText : 'inherit'};
            &:hover {
              background: ${sx
                ? hoverBg && typeof hoverBg === 'function' && theme
                  ? hoverBg(theme)
                  : hoverBg
                : theme
                  ? theme?.palette.primary[700]
                  : 'inherit'};

              color: ${sx
                ? hoverColor && typeof hoverColor === 'function' && theme
                  ? hoverColor(theme)
                  : hoverColor
                : theme
                  ? theme?.palette.primary.contrastText
                  : 'inherit'};
            }
            ${sx && dynamicStyles};
          }
        `}
      </style>
      {children}
    </button>
  );
};

export default Button;
