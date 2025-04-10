/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",  // Include all your source files
  ],
  safelist: [
    'animate-bounce-once',  // Safelist your custom class
  ],
  theme: {
    extend: {
      keyframes: {
        
      },
      animation: {
        "bounce-once": "bounce 1s ease-in-out 1",  // Custom animation
      },
    },
  },
  plugins: [],
};
