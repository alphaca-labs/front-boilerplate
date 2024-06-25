/**
 * 주어진 날짜 해당 월의 마지막 날을 반환합니다.
 * @param {string} date - 날짜
 * @returns {string} 해당 월의 마지막 날
 */

import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "../format";

export const getLastDayOfMonth = (date: string): string => {
  return dayjs(date).endOf("month").format(DEFAULT_DATE_FORMAT);
};
