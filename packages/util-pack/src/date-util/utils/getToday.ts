import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "../format";

/**
 * 오늘 날짜를 YYYYMMDD 형식으로 반환합니다.
 * @returns {string} 오늘 날짜
 */
export const getToday = (): string => {
  return dayjs().format(DEFAULT_DATE_FORMAT);
};
