'use client'

import { MutableRefObject, RefObject } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    ref?: RefObject<HTMLButtonElement>
}

const Button = ({ className, children, ref, ...props }: ButtonProps) => {
    return (
        <button
            className={twMerge(
                'bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors',
                className
            )}
            {...props}
            ref={ref}
        >
            {children}
        </button>
    )
}

export default Button;