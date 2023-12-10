import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#3F51B5',       // Purple
        secondary: '#E1BEE7',     // Light Purple
        accent: '#FFFFFF',        // White
        background: '#F3E5F5',    // Lavender
        text: '#333333',          // Dark Gray
        link: '#9C27B0',          // Indigo
      },
    },
  },
  plugins: [],
}
export default config
