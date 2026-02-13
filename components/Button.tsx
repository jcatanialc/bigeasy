import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  size = 'md',
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variants = {
    // Gold with dark text - mimics the measuring tape
    primary: "bg-brand-primary text-brand-dark hover:bg-[#eccb76] shadow-[0_4px_20px_-5px_rgba(230,185,77,0.5)] border border-transparent",
    // Deep Blue - Sophisticated
    secondary: "bg-brand-dark text-white hover:bg-brand-secondary shadow-lg",
    // Outline - Clean
    outline: "border-2 border-brand-dark/20 text-brand-dark bg-transparent hover:border-brand-dark hover:bg-brand-dark hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};