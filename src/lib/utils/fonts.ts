import { Inter, Roboto_Mono, Rubik } from 'next/font/google';
import localFont from 'next/font/local'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: [
    '400', // Regular
    '500', // Medium
    '700', // Bold
  ],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: [
    '400', // Regular
    '500', // Medium
    '600', // Semibold
    '700', // Bold
  ],
});

const rubik = localFont({
  variable : '--font-rubik',
  src: [
    {
      path: './custom/Rubik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './custom/Rubik-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './custom/Rubik-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './custom/Rubik-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

const fontVariables = `${inter.variable} ${robotoMono.variable} ${rubik.variable}`;

export default fontVariables;
