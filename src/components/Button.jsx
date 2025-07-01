import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  className = '',
  ...props
}) => {
  // Base styles that apply to all buttons
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Variant styles
  const variants = {
    primary: "bg-white text-black border-2 border-white hover:bg-gray-100 hover:text-black hover:shadow-2xl focus:ring-blue-500",
    secondary: "bg-yellow-300 text-black border-2 border-yellow-200 hover:bg-yellow-200 hover:border-yellow-100 hover:text-black font-bold hover:shadow-2xl focus:ring-yellow-400",
    outline: "border-2 border-blue-600 text-black bg-transparent hover:bg-blue-600 hover:text-white hover:shadow-xl focus:ring-blue-500",
    clean: "bg-transparent text-gray-800 border-0 hover:text-blue-600 hover:scale-100 focus:ring-blue-500",
    gradient: "bg-gradient-to-r from-blue-600 to-indigo-700 font-bold border-0 hover:from-blue-700 hover:to-indigo-800 hover:shadow-2xl focus:ring-blue-500" + " !text-white hover:!text-white",
    danger: "bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 hover:border-red-700 hover:shadow-xl focus:ring-red-500",
    solid: "bg-slate-800 text-white font-medium border border-slate-800 hover:bg-slate-900 hover:border-slate-900 hover:text-white hover:shadow-lg focus:ring-slate-600",
    professional: "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-white hover:text-slate-900 hover:border-slate-300 hover:shadow-lg font-medium focus:ring-slate-400"
  };
  









  // Size styles
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Button content with optional icon
  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );
  
  // If it's a link to external URL
  if (href) {
    return (
      <a
        href={href}
        className={buttonStyles}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }
  
  // If it's a React Router link
  if (to) {
    return (
      <Link to={to} className={buttonStyles} {...props}>
        {buttonContent}
      </Link>
    );
  }
  
  // Regular button element
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonStyles} ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}`}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

// Additional specialized button components
export const IconButton = ({ icon, children, ...props }) => (
  <Button icon={icon} {...props}>
    {children}
  </Button>
);

export const CTAButton = ({ children, ...props }) => (
  <Button variant="gradient" size="lg" {...props}>
    {children}
  </Button>
);

export const LinkButton = ({ children, ...props }) => (
  <Button variant="outline" {...props}>
    {children}
  </Button>
);

export default Button;
