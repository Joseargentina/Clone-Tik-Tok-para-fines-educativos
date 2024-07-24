module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'standard', // Extiende la configuración de standard
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    
    'import/no-absolute-path': 'off'  // Desactivar temporalmente esta regla para probar
  },
  
}
