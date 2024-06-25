import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "../format";
import { getToday } from "../utils";

describe("getToday 함수", () => {
  it("오늘 날짜를 YYYYMMDD 형식으로 반환해야 합니다.", () => {
    const today = dayjs().format(DEFAULT_DATE_FORMAT);
    expect(getToday()).toBe(today);
  });
});
