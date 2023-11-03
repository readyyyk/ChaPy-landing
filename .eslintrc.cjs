module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:tailwindcss/recommended',
    'plugin:react-hooks/recommended',
    'google',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: './',
  },
  plugins: ['react-refresh'],
  settings: {
    'react': {
      'version': 'detect'
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 4],
    'max-len': ['error', {
      'ignoreStrings': true,
      'ignorePattern': 'd=\'*$',
    }],
    'linebreak-style': 0,
  },
  ignorePatterns: [
    'dist/',
    '.eslintrc.cjs',
    'vite-env.d.ts',
    'main.tsx',
    '*config*',
    '*.md',
  ],
}
