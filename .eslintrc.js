module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "extends": ["plugin:react/recommended", "prettier", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "typescript": true
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "@typescript-eslint/ban-ts-ignore": 0,
    "comma-dangle": ["warn", "only-multiline"],
    "eol-last": ["error", "always"],
    "no-extra-semi": "error",
    "indent": ["error", 2],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
    "object-curly-spacing": ["error", "always"],
    "react/jsx-uses-vars": 1,
    "react/prop-types": 0
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
