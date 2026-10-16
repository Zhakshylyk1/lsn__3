import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  isError = false,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'w-full rounded-lg px-3.5 py-2 text-sm outline-none transition-all placeholder:text-neutral-400 bg-white';

  const stateStyles = isError
    ? 'border border-rose-500 text-rose-950 focus:ring-2 focus:ring-rose-400 focus:border-rose-500'
    : 'border border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-neutral-400';

  const disabledStyles = disabled
    ? 'bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed'
    : '';

  return (
    <input
      disabled={disabled}
      className={`${baseStyles} ${stateStyles} ${disabledStyles} ${className}`.trim()}
      {...props}
    />
  );
};