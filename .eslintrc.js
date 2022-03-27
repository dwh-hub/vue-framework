module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/standard',
    '@vue/prettier',
    'vue-global-api'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
