import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const HOST = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://chapy-landing.vercel.app';
