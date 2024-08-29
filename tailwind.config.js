import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [`"Inter"`, 'sans-serif'],
      },
      keyframes: {
        'rotate-3d': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(180deg) rotateY(180deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
      },
      animation: {
        'rotate-3d': 'rotate-3d 20.4s infinite linear',
      },
    },
  },
  plugins: [],
});
