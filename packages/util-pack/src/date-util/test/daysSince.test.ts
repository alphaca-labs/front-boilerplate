import dayjs from "dayjs";
import { daysSince } from "../utils";

jest.mock("dayjs", () => {
  const actualDayjs = jest.requireActual("dayjs");
  return {
    __esModule: true,
    default: (date?: string | number | Date | null | undefined) => {
      return actualDayjs("2023-06-01");
    },
    ...actualDayjs,
  };
});

describe("daysSince 함수", () => {
  it("주어진 날짜로부터 오늘까지 경과한 일 수를 반환해야 합니다.", () => {
    const date = "2023-01-01";
    const expectedDiff = dayjs().diff(dayjs(date), "day");
    expect(daysSince(date)).toBe(expectedDiff);
  });

  it("주어진 날짜로부터 오늘까지 경과한 월 수를 반환해야 합니다.", () => {
    const date = "2023-01-01";
    const expectedDiff = dayjs().diff(dayjs(date), "month");
    expect(daysSince(date, "month")).toBe(expectedDiff);
  });

  it("주어진 날짜로부터 오늘까지 경과한 년 수를 반환해야 합니다.", () => {
    const date = "2020-01-01";
    const expectedDiff = dayjs().diff(dayjs(date), "year");
    expect(daysSince(date, "year")).toBe(expectedDiff);
  });
});
