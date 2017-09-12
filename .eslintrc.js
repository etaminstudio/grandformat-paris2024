// ESLint config : http://eslint.org/docs/user-guide/configuring
module.exports = {
  // "parser": "babel-eslint",
  "parserOptions": {
    // "sourceType": "script",
  },
  "env": {
    "browser": true,
    "node": false,
    "commonjs": true,
    "amd": false,
    "es6": false,
    "jquery": true
  },
  "extends": [
    "eslint:recommended",
    "xo-space"
  ],
  "plugins": [],
  // rules list : http://eslint.org/docs/rules/
  "rules": {
    // Possible Errors
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "no-template-curly-in-string": ["off"],
    // Best Practices
    "no-multi-spaces": ["error", { exceptions: { "VariableDeclarator": true } }],
    // Strict Mode
    // "strict": "safe",
    // Node.js and CommonJS
    "callback-return": ["warn", ["cb", "callback", "next", "done"]],
    // Stylistic Issues
    "brace-style": ["error", "stroustrup"],
    "camelcase": ["warn", { properties: "always" }],
    "capitalized-comments": ["off"],
    "comma-dangle": ["error", "only-multiline"],
    'max-lines': ['warn', {
      "max": 500,
      "skipBlankLines": true,
      "skipComments": true
    }],
    "max-params": ["off"],
    "new-cap": ["error", {
      "newIsCap": true,
      "capIsNew": false
    }],
    "no-multiple-empty-lines": ["warn", { "max": 3 }],
    "no-unused-vars": ["warn", { "argsIgnorePattern": "(el|e|event|err|error|success|notify)" }],
    "object-curly-spacing": ["warn", "always"],
    "operator-linebreak": ["error", "before"],
    "padded-blocks": ["off"],
    "quote-props": ["error", "as-needed"],
    "quotes": ["warn", "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "space-before-function-paren": ["error", "never"],
    "spaced-comment": ["off"],
    // "spaced-comment": ["warn", "always", {
    //   "line": {
    //     "exceptions": ["-", "/"]
    //   }
    //   "block": {
    //     "markers": ["!"],
    //     "balanced": false
    //   }
    // }],
    // ECMAScript 6
    "arrow-parens": ["error", "always"]
  },
  "globals": {
    "window": false,
    "document": false,
    "$": false,
    "Paris": false
  }
}
