import {FC, HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'filled'|'outline',
}

const variantStyles: Record<string, string> = {
    'filled': 'text-black bg-white',
    'outline': '',
};

const Button:FC<Props> = ({variant='filled', children, className, ...args}) => {
    return (
        <button {...args} className={twMerge('rounded-xl border-2 border-white px-6 py-3 transition-all duration-150 ease-in-out', variantStyles[variant], className)}>
            {children}
        </button>
    );
};

export default Button;
