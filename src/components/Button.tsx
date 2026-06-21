import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, variant = 'primary', href, className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 backdrop-blur-md border outline-none";
  const variants = {
    primary: "bg-blue-500/10 border-blue-500/50 text-white hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-0.5",
    secondary: "bg-white/5 border-white/10 text-text-heading hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
       return <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer">{children}</a>
    }
    return (
      <Link to={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
