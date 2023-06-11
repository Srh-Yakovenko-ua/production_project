module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'react/jsx-indent': [2, 2], // отступы в jsx  коде
    'react/jsx-indent-props': [2, 2], // для пропсов
    indent: [2, 2], // отступы для обычного кода
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // разрешение для jsx tsx
    'import/no-unresolved': 'off', // отключение абсолютных путей
    'import/prefer-default-export': 'off', // отключения дефолтных пропсов
    'no-unused-vars': 'warn', // если переменная не используется
    'react/require-default-props': 'off', // если пропсы оциональны
    'react/react-in-jsx-scope': 'off', // отключения импорта реакта
    'react/jsx-props-no-spreading': 'warn', // для спреда оператора
    'react/function-component-definition': 'off', // отключения для декларированой функции обязательной для компоненты
    'no-shadow': 'off',
    'import/extensions': 'off', // отключения импорта расширения
    'import/no-extraneous-dependencies': 'off', // dev зависимости импорта
    'no-underscore-dangle': 'off', // отключения нижних подчеркиваний
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true }], // отступы внутри обьекта
    'max-len': ['error', { code: 100, ignoreComments: true }], // для максимального количества строк
    'i18next/no-literal-string': ['error', { markupOnly: true }], // только для отсутвия перевода внутри jsx
  },
  // для глобальных констант
  globals: {
    __IS_DEV__: true,
  },
};
