module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class', // VERY IMPORTANT
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
