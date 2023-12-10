import { Montserrat, Lato, Playfair_Display, Quicksand } from 'next/font/google';

export const heading = Montserrat(
    {
        weight: ['700'], 
        style: ['italic'],
        subsets: ['latin']
    }
)

export const body = Lato(
    {
        weight: ['700'],
        style: ['normal'],
        subsets: ['latin']
    }
)

export const accent = Playfair_Display(
    {
        weight: ['700'],
        style: ['italic', 'normal'],
        subsets: ['latin']
    }
)

export const logo = Quicksand(
    {
        weight: ['700'],
        style: ['normal'],
        subsets: ['latin']
    }
)