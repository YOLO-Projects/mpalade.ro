/* eslint-env node */
module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },

  env: {
    browser: true,
    es2022: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'standard'
  ],

  plugins: [
    'vue'
  ],

  globals: {
    ga: 'readonly',
    cordova: 'readonly',
    __statics: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },

  rules: {
    'generator-star-spacing': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    'vue/multi-word-component-names': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    {
      files: ['*.{js,cjs}'],
      parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
      }
    }
  ]
}
