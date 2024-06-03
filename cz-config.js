module.exports = {
  types: [
    { value: "feat", name: "feat:     새로운 기능" },
    { value: "fix", name: "fix:      버그 수정" },
    { value: "docs", name: "docs:     문서 수정" },
    { value: "style", name: "style:    코드 포맷팅, 세미콜론 누락 등" },
    { value: "refactor", name: "refactor: 코드 리팩토링" },
    { value: "test", name: "test:     테스트 추가 또는 수정" },
    { value: "chore", name: "chore:    기타 변경 사항" },
  ],
  messages: {
    type: "어떤 종류의 변경 사항인가요?",
    scope: "변경 사항의 범위는 무엇인가요? (옵션)",
    customScope: "변경 사항의 범위를 명시해주세요 (옵션)",
    subject: "변경 사항에 대해 간결하고 명확한 설명을 작성해주세요:\n",
    body: '변경 사항에 대한 자세한 설명을 작성해주세요 (옵션). "enter"를 두 번 눌러 종료할 수 있습니다:\n',
    breaking:
      "이 변경 사항이 호환성에 영향을 미치는 경우, 그에 대한 설명을 작성해주세요 (옵션):\n",
    footer:
      "이 변경 사항과 관련된 이슈가 있다면, 그 이슈 번호를 작성해주세요 (옵션):\n",
    confirmCommit:
      "이 커밋 메시지를 사용하여 커밋을 진행하시겠습니까? (yes/no)",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  footerPrefix: "ISSUES CLOSED:",
};
