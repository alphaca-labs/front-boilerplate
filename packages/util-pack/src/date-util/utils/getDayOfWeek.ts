import dayjs from "dayjs";
import { WEEKDAY_FORMAT } from "../format";

/**
 * 주어진 날짜의 요일을 반환합니다.
 * @param {string} date - 날짜
 * @returns {string} 요일 (예: 'Monday')
 */
export const getDayOfWeek = (date: string): string => {
  return dayjs(date).format(WEEKDAY_FORMAT);
};
