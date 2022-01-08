module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'react/boolean-prop-naming': ['error', { validateNested: true }],
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    // 'react/hook-use-state': 'error',   - uncomment after eslint-plugin-react 7.29.0 is released
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        sortShapeProp: true
      }
    ],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'always' }],
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': ['error', { checkLocalVariables: true }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': ['error', { callbacksLast: true, shorthandFirst: true, reservedFirst: true }]
  }
}
