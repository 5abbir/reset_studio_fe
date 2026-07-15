    import React from 'react';

    // Define the available options for typescripts
    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'clay' | 'white' | 'ghost';
    size?: 'md' | 'sm' | 'xs';
    fullWidth?: boolean;
    children: React.ReactNode;
    }

    export function Button({ 
    variant = 'default', 
    size = 'md', 
    fullWidth = false, 
    children, 
    className = '', 
    ...props 
    }: ButtonProps) {
    
    // FIXED: Removed "bg-transparent" from this base string
    const baseStyles = "inline-flex items-center justify-center gap-1.5 border-[1.5px] font-semibold tracking-[0.02em] transition-all duration-200 cursor-pointer whitespace-nowrap";

// Variant styles mapping direct hex colors to bypass variable lookup bugs
const variantStyles = {
default: "bg-transparent border-[#1a1612] hover:bg-[#1a1612] hover:text-[#fbf9f6] text-[#1a1612]",
primary: "bg-[#4a5d4e] border-[#4a5d4e] text-white hover:bg-[#1a1612] hover:border-[#1a1612]",
clay:    "bg-[#e06a3b] border-[#e06a3b] text-white hover:bg-[#9c4d31] hover:border-[#9c4d31]", // Solid Orange -> Dark Orange
white:   "bg-white border-white text-[#4a5d4e] hover:bg-[#f5f2eb] hover:text-[#1a1612]",
ghost:   "bg-white/10 border-white/25 text-white hover:bg-white/20"
};


    // Size styles
    const sizeStyles = {
        md: "px-5 py-2.5 text-[13px] rounded-[3px]",
        sm: "px-3.5 py-1.5 text-[12px] rounded-[3px]",
        xs: "px-2.5 py-1 text-[11.5px] rounded-[3px]"
    };

    // Width style
    const widthStyle = fullWidth ? "w-full" : "";

    // Combine all strings dynamically
    return (
        <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
        {...props}
        >
        {children}
        </button>
    );
    }
