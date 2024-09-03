'use client'

import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

const Button = ({ className, children, ...props }: ButtonProps) => {
    return (
        <button
            className={twMerge(
                'bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;