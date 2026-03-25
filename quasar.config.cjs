/* eslint-env node */

module.exports = (/* ctx */) => {
  return {
    boot: [
      'i18n',
    ],

    css: [
      'app.sass'
    ],

    extras: [
      'mdi-v5',
      'fontawesome-v5',
      'line-awesome',
      'roboto-font',
      'material-icons'
    ],

    framework: {
      config: {
        screen: {
          bodyClasses: true
        }
      },
      iconSet: 'material-icons',
      lang: 'en-us',
      importStrategy: 'auto',
      plugins: [
        'Meta'
      ]
    },

    build: {
      vueRouterMode: 'history',
      gzip: true,
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node24'
      }
    },

    devServer: {
      open: false,
      port: 8080
    },

    animations: []
  }
}
