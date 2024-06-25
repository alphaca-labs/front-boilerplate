import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "../format";
import { getLastDayOfMonth } from "../utils";

// dayjs를 모킹하여 항상 특정 날짜를 반환하도록 설정
jest.mock("dayjs", () => {
  const actualDayjs = jest.requireActual("dayjs");
  return {
    __esModule: true,
    default: (date?: string | number | Date | null | undefined) => {
      return date ? actualDayjs(date) : actualDayjs("2024-06-26");
    },
    ...actualDayjs,
  };
});

describe("getLastDayOfMonth 함수", () => {
  it("주어진 날짜 해당 월의 마지막 날을 반환해야 합니다.", () => {
    const date = "2024-06-26";
    const expectedDate = dayjs(date).endOf("month").format(DEFAULT_DATE_FORMAT);
    expect(getLastDayOfMonth(date)).toBe(expectedDate);
  });
});
