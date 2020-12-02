module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        'header-primary': '#005ab2',
        'header-secondary': '#138ad3',
        footer: '#022C56',
      },
      fontSize: {
        xxs: '.625rem',
        xxxs: '.5rem',
      },
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1366px',
    },
  },
}
