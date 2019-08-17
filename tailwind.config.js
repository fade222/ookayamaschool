// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP']
      }
    }
  },
  variants: {
    opacity: ['responsive', 'group-hover', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  }
}
