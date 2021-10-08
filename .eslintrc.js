module.exports = {
  env: {
    es2020: true,
    jest: true,
    browser: true
  },
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['dist', '.eslintrc.js'],
  settings: {
    ['import/resolver']: {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    jest: {
      version: 'detect'
    },
    react: {
      version: 'detect'
    }
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'jest',
    'jest-dom',
    'jest-formatting',
    'prettier',
    'promise',
    'react',
    'react-hooks',
    'simple-import-sort',
    'sort-keys-fix',
    'testing-library',
    'typescript-sort-keys',
    'unicorn'
  ],
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': 'off', // Overrides prettier config.
    'array-bracket-spacing': 'off', // Overrides prettier config.
    'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],
    'array-element-newline': 'off', // Overrides prettier config.
    'arrow-body-style': 'off', // Overrides prettier config.
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'camelcase': 'off', // Shows an error when objects take parameters that are e.g. snake_case (e.g. class validator decorator options).
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'comma-spacing': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'comma-style': ['error', 'last'],
    'complexity': 'off',
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'consistent-this': 'error',
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': 'off', // Overrides prettier config.
    'dot-notation': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'for-direction': 'error',
    'func-call-spacing': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'func-name-matching': ['error', 'always'],
    'func-names': ['error', 'always'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'function-call-argument-newline': 'off', // Overrides prettier config.
    'function-paren-newline': 'off', // Overrides prettier config.
    'generator-star-spacing': ['error', { before: false, after: true }],
    'getter-return': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off', // Shows an error with some libraries that export very short constants (e.g. ky).
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'init-declarations': 'off', // Disabled because it shows an error in NestJS test files because all declarations (e.g. services) are uninitialized at the beginning of a test file.
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],
    'keyword-spacing': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'line-comment-position': ['error', { position: 'above' }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off', // Does not work with TypeScript features (e.g. enums).
    'lines-between-class-members': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
    'max-len': 'off', // Overrides prettier config.
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off', // Rule is annoying to work with because it may transform lots of lines of comments which is slow.
    'multiline-ternary': 'off', // Overrides prettier config.
    'new-cap': 'off', // Shows an error that decorators cannot be used.
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-extra-semi': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off', // Overrides prettier config.
    'no-undef': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'off', // Not helpful.
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-unused-labels': 'error',
    'no-unused-vars': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-use-before-define': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': ['warn', { terms: ['todo', 'fix'], location: 'anywhere' }],
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': 'off', // Overrides prettier config.
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 'off', // Overrides prettier config.
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'], // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'space-infix-ops': 'off', // Rule exists in `@typescript-eslint/eslint-plugin` library.
    'space-unary-ops': 'error',
    'spaced-comment': 'off', // Break triple slash types reference (e.g. from create-react-app).
    'strict': ['error', 'never'],
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'off',
    'wrap-regex': 'error',
    'yield-star-spacing': ['error', { before: false, after: true }],
    'yoda': 'error',

    // import
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'error',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': ['error', 'never', { svg: 'always', png: 'always', jpg: 'always' }],
    'import/first': 'error',
    'import/group-exports': 'off', // Does not allow to have multiple exports in 1 file.
    'import/max-dependencies': 'off',
    'import/named': 'off', // Does not work with TypeScript.
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'off', // Sometimes breaks the whole eslint for unknown reasons.
    'import/no-import-module-exports': 'off', // Breaks imports for unknown reasons.
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off', // Sometimes there is no other options that importing something as a namespace (i.e. `import * as name from 'module'` syntax).
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off', // Shows an error when trying to inject modules from the same level directories in NestJS.
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': 'off', // Shows an error when trying to resolve a path to object living in `dist` directory (e.g. `react-hook-form/dist/types`).
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'off', // Sorting imports is already handled by the `eslint-plugin-simple-import-sort`.
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off', // Breaks some type definition files (e.g. `react-app-env.d.ts`).

    // jest-formatting
    'jest-formatting/padding-around-after-all-blocks': 'off',
    'jest-formatting/padding-around-after-each-blocks': 'off',
    'jest-formatting/padding-around-all': 'error',
    'jest-formatting/padding-around-before-all-blocks': 'off',
    'jest-formatting/padding-around-before-each-blocks': 'off',
    'jest-formatting/padding-around-describe-blocks': 'off',
    'jest-formatting/padding-around-expect-groups': 'off',
    'jest-formatting/padding-around-test-blocks': 'off',

    // jest
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
    'jest/expect-expect': 'error',
    'jest/lowercase-name': ['error', { ignoreTopLevelDescribe: true, allowedPrefixes: ['GET'] }],
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-done-callback': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': 'off',
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-matchers': [
      'error',
      {
        toBe: 'Use `.toStrictEqual() instead.',
        toEqual: 'Use `.toStrictEqual() instead.',
        toHaveBeenCalled: 'Use `.toHaveBeenCalledTimes()` or `.toHaveBeenCalledWith()` instead.'
      }
    ],
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-called-with': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'off', // Already handled by the `jest/no-restricted-matchers` rule.
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-to-throw-message': 'off',
    'jest/require-top-level-describe': 'error',
    'jest/unbound-method': 'off',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',

    // prettier
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        quoteProps: 'as-needed',
        tabWidth: 2,
        trailingComma: 'none'
      }
    ],

    // promise
    'promise/always-return': 'error',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'off', // Shows error with callbacks in synchronous functions (e.g. flatMap).
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error',

    // simple-import-sort
    'simple-import-sort/imports': ['error', { groups: [['^\\u0000'], ['^[^.]'], ['^\\.']] }],
    'simple-import-sort/exports': 'error',

    // sort-keys
    'sort-keys-fix/sort-keys-fix': 'error',

    // typescript-eslint
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        'minimumDescriptionLength': 10
      }
    ],
    '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: true, prefer: 'no-type-imports' }
    ],
    '@typescript-eslint/default-param-last': ['error'],
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: false,
        allowHigherOrderFunctions: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: [],
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': 'off', // Overrides prettier config.
    '@typescript-eslint/init-declarations': 'off', // Disabled because it shows an error in NestJS test files because all declarations (e.g. services) are uninitialized at the beginning of a test file.
    '@typescript-eslint/keyword-spacing': ['error', { after: true, before: true }],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterOverload: true, exceptAfterSingleLine: true }
    ],
    '@typescript-eslint/member-delimiter-style': 'off', // Overrides prettier config.
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will']
      },
      { selector: 'function', format: ['camelCase', 'PascalCase'] }, // PascalCase must be in formats array because custom decorators are functions that start with an uppercase letter by convention.
      { selector: 'method', format: ['camelCase'] },
      { selector: 'enumMember', format: ['PascalCase'] },
      { selector: 'typeParameter', format: ['PascalCase'] }
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extra-parens': 'off', // Overrides prettier config.
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: true,
        allowWithDecorator: true
      }
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': [
      'error',
      { allows: ['private readonly', 'protected readonly', 'public readonly'] }
    ],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        args: 'all',
        caughtErrors: 'all'
      }
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/object-curly-spacing': 'off', // Overrides prettier config.
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/quotes': ['error', 'backtick'],
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/space-before-function-paren': 'off', // Overrides prettier config.
    '@typescript-eslint/space-infix-ops': 'off', // Overrides prettier config.
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
      }
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: true,
        arrowParameter: true,
        memberVariableDeclaration: true,
        objectDestructuring: true,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: true
      }
    ],
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    // typescript-sort-keys
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',

    // unicorn
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'off', // There is a bug which prevents the rule from working as expected when backticks are used to provide error class name.
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true, kebabCase: true } }],
    'unicorn/import-index': 'error',
    'unicorn/import-style': 'off',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-keyword-prefix': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': ['error', { number: { minimumDigits: 0, groupLength: 3 } }],
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'off',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': ['error', { checkRequire: true }],
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-has-own': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-ternary': ['error', 'only-single-line'],
    'unicorn/prefer-type-error': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/string-content': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        extendDefaultReplacements: false,
        checkFilenames: false,
        checkProperties: true,
        replacements: {
          acc: { accumulator: true },
          cb: { callback: true },
          cmd: { command: true },
          e: { error: true, event: true },
          el: { element: true },
          err: { error: true },
          i: { index: true },
          idx: { index: true },
          o: { object: true },
          req: { request: true },
          res: { response: true, result: true }
        }
      }
    ],

    // jest-dom
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-empty': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-focus': 'error',
    'jest-dom/prefer-in-document': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
    'jest-dom/prefer-to-have-class': 'error',
    'jest-dom/prefer-to-have-style': 'error',
    'jest-dom/prefer-to-have-text-content': 'error',
    'jest-dom/prefer-to-have-value': 'error',

    // react-hooks
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    // react
    'react/boolean-prop-naming': ['error', { rule: '^(is|has|should|will|can|did)[A-Z]([A-Za-z0-9]?)+' }],
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off', // Forces to destructure `props`.
    'react/display-name': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off', // Autofix does not work well with TypeScript. Autofix uses `var` declaration.
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-child-element-spacing': 'off', // Overrides prettier config.
    'react/jsx-closing-bracket-location': 'off', // Overrides prettier config.
    'react/jsx-closing-tag-location': 'off', // Overrides prettier config.
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'always' }],
    'react/jsx-curly-newline': 'off', // Overrides prettier config.
    'react/jsx-curly-spacing': 'off', // Overrides prettier config.
    'react/jsx-equals-spacing': 'off', // Overrides prettier config.
    'react/jsx-filename-extension': 'off', // Does not work with TypeScript eslint.
    'react/jsx-first-prop-new-line': 'off', // Overrides prettier config.
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': 'off', // Overrides prettier config.
    'react/jsx-indent-props': 'off', // Overrides prettier config.
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off', // It's inconvenient.
    'react/jsx-max-props-per-line': 'off', // Overrides prettier config.
    'react/jsx-newline': ['error', { prevent: true }],
    'react/jsx-no-bind': 'off', // Used only for classed components.
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off', // Already handled by `react/jsx-curly-brace-presence` rule.
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'off', // Already handled by TypeScript.
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'off', // Overrides prettier config.
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'off', // Already handled by prettier.
    'react/jsx-props-no-spreading': 'off', // Shows errors with 3rd party libraries (e.g. react-hook-form).
    'react/jsx-sort-default-props': 'off', // Already handled by `sort-keys-fix/sort-keys-fix` rule.
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'off', // Overrides prettier config.
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'off', // Already handled by TypeScript.
    'react/jsx-wrap-multilines': 'off', // Overrides prettier config.
    'react/no-access-state-in-setstate': 'off', // Used only for classed components.
    'react/no-adjacent-inline-elements': 'off', // Overrides prettier config.
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'off', // Not helpful because you are not using dangerous properties when there is no need anyway.
    'react/no-danger-with-children': 'off', // Not helpful because you are not using dangerous properties when there is no need anyway.
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'off', // Used only for classed components.
    'react/no-did-update-set-state': 'off', // Used only for classed components.
    'react/no-direct-mutation-state': 'off', // Used only for classed components.
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'off', // Used only for classed components.
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'off', // Used only for classed components.
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off', // Used only for classed components.
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'off', // Already handled by TypeScript.
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'off', // Used only for classed components.
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-prop-types': 'off', // Already handled by TypeScript.
    'react/no-unused-state': 'off', // Used only for classed components.
    'react/no-will-update-set-state': 'off', // Used only for classed components.
    'react/prefer-es6-class': 'off', // Used only for classed components.
    'react/prefer-read-only-props': 'off', // Works only for flow.
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off', // Already handled by TypeScript.
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off', // Already handled by TypeScript.
    'react/require-optimization': 'off', // Used only for classed components.
    'react/require-render-return': 'off', // Used only for classed components.
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'off', // Used only for classed components.
    'react/sort-prop-types': 'off', // Not helpful because you are not using `prop-types` in TypeScript.
    'react/state-in-constructor': 'off', // Used only for classed components.
    'react/static-property-placement': 'off', // Used only for classed components.
    'react/style-prop-object': 'off', // Already handled by TypeScript.
    'react/void-dom-elements-no-children': 'error',

    // testing-library
    'testing-library/await-async-query': 'error',
    'testing-library/await-async-utils': 'error',
    'testing-library/await-fire-event': 'error',
    'testing-library/consistent-data-testid': ['error', { testIdPattern: '^test-id-.*' }],
    'testing-library/no-await-sync-events': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-debug': 'error',
    'testing-library/no-dom-import': ['error', 'react'],
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-node-access': 'error',
    'testing-library/no-promise-in-fire-event': 'error',
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-unnecessary-act': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/no-wait-for-multiple-assertions': 'error',
    'testing-library/no-wait-for-side-effects': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-find-by': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-user-event': 'error',
    'testing-library/prefer-wait-for': 'error',
    'testing-library/render-result-naming-convention': 'error'
  }
}
