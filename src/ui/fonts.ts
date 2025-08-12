import { Inter, Sansation } from 'next/font/google';

export const sansation = Sansation({
    subsets: ['latin'],
    variable: "--font-sansation",
    weight: '400' }
);

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})