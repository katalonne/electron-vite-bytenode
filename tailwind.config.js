/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      // Defaults
      // 'primary-2': '#fff8eb',
      // 'primary-3': "#fff3e0",
      // 'primary-7': '#ffc16b',
      // 'primary-9': '#ffbe3d',
      // 'primary-dark-9': '#ffb224'

      // yellow-1
      // 'primary-9': '#eeb723',
      // 'primary-10': '#CA9C1E',

      // Dark blue-1
      // 'primary-9': '#005fc9',
      // 'primary-10': '#0051AB',

      // Dark blue-2
      'primary-2': '#5FB7FF',
      'primary-3': '#58ABFF',
      'primary-4': '#529FF4',
      'primary-5': '#4C92E2',
      'primary-6': '#4586CF',
      'primary-7': '#4280C5',
      'primary-8': '#407CC0',
      'primary-9': '#3F7ABC',
      'primary-dark-9': '#34349a',
      'primary-10': '#3668A0',

      'gray-1': '#fdfdfc',
      'gray-5': '#e9e9e7',
      'gray-dark-1': '#151514',
      'gray-dark-5': '#2d2d2a',
      'gray-dark-11': '#a2a19a',
      'gray-dark-12': '#eeeeed',
      
    },
    extend: {},
  },
  plugins: [],
}

