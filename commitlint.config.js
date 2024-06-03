module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "header-case": ({ header }) => {
          const isLowerCase = header === header.toLowerCase();
          return [
            isLowerCase,
            "커밋 메시지의 제목은 소문자로 작성해야 합니다.",
          ];
        },
      },
    },
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
    "subject-case": [0, "never"],
  },
};
