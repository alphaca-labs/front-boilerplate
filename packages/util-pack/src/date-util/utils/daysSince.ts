import dayjs, { OpUnitType, QUnitType } from "dayjs";

/**
 * 주어진 날짜로부터 오늘까지 경과한 시간을 반환합니다.
 * @param {string} diffDate - 비교할 날짜
 * @param {QUnitType | OpUnitType} [unit="day"] - 경과 시간을 계산할 단위 (예: 'day', 'month', 'year' 등)
 * @returns {number} 경과한 시간 (단위에 따라 일 수, 월 수, 년 수 등)
 */
export const daysSince = (
  diffDate: string,
  unit: QUnitType | OpUnitType = "day"
): number => {
  const today = dayjs();
  return today.diff(dayjs(diffDate), unit);
};
