import sharedRules from "@schoero/configs/eslint";


export default [
  ...sharedRules,
  {
    files: ["themes/*.json"],
    rules: {
      "jsonc/sort-keys": "off"
    }
  }
];
