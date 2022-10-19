module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/self-closing-comp": "warn",
    "no-var": "warn",
    "no-multiple-empty-lines": "warn",
    "no-console": "warn",
    eqeqeq: "warn",
    "no-unused-vars": "warn",
    "react/jsx-pascal-case": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-unused-state": "warn",
    "react/jsx-key": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "turbo/no-undeclared-env-vars": "off",
  },
};
