import { getDayOfWeek } from "../utils";

describe("getDayOfWeek 함수", () => {
  it("주어진 날짜의 요일을 반환해야 합니다.", () => {
    const date = "2024-06-26";
    const expectedDayOfWeek = "Wednesday";
    expect(getDayOfWeek(date)).toBe(expectedDayOfWeek);
  });
});
