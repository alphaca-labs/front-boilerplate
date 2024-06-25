import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "../format";
import { addDays } from "../utils";

describe("addDays 함수", () => {
  it("주어진 날짜에 지정된 일 수를 더한 날짜를 반환해야 합니다.", () => {
    const date = "2023-01-01";
    const daysToAdd = 10;
    const expectedDate = dayjs(date)
      .add(daysToAdd, "day")
      .format(DEFAULT_DATE_FORMAT);
    expect(addDays(date, daysToAdd)).toBe(expectedDate);
  });

  it("주어진 날짜에 음수를 더한 날짜를 반환해야 합니다.", () => {
    const date = "2023-01-10";
    const daysToAdd = -5;
    const expectedDate = dayjs(date)
      .add(daysToAdd, "day")
      .format(DEFAULT_DATE_FORMAT);
    expect(addDays(date, daysToAdd)).toBe(expectedDate);
  });
});
