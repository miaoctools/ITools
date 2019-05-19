// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    parserOptions: { // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
      sourceType: 'module'
    },
  },
  env: {
    browser: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  // required to lint *.vue files
  plugins: ['vue', 'html'],
  // add your custom rules here
  rules: {
    'no-extra-parens': 'error', //禁止不必要的括号
    'no-extra-semi': 'error', //禁止不必要的分号
    "no-use-before-define": 'error', //未定义前不能使用
    "no-unused-expressions": 2, //禁止无用的表达式
    "no-unneeded-ternary": 2, //禁止不必要的嵌套
    "no-undef": 1, //不能有未定义的变量
    eqeqeq: 'error', //要求使用 === 和 !==
    'no-multi-spaces': 'error', //禁止使用多个空格
    'no-undef': 'off', // 不能有未定义的变量
    quotes: ['error', 'single'], //强制使用单引号
    semi: ['error', 'never'], //强制不使用分号结尾
    'no-unused-expressions': 'off', // 禁止无用的表达式
    'generator-star-spacing': 'off', // 生成器函数*的前后空格
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off' // 使用console
  }
}