/**
 * 주어진 날짜에 며칠을 더합니다.
 * @param {string} date - 기준 날짜
 * @param {number} days - 더할 일 수
 * @returns {string} 결과 날짜
 */

import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "../format";

export const addDays = (date: string, days: number): string => {
  return dayjs(date).add(days, "day").format(DEFAULT_DATE_FORMAT);
};
