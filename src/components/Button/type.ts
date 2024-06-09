// Define the specific attributes for csRadio tags
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface buttonAttributes
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  size?: 'sm' | 'md' | 'lg';
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
}
