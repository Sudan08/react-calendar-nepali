import { NepaliMonth } from "@/model";

const CALENDAR_DATA: Record<number, number[]> = {
  2070: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2071: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2072: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2073: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2074: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2075: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2076: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2077: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2078: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2080: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2081: [31, 32, 31, 32, 31, 30, 29, 30, 29, 29, 30, 31],
  2082: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2083: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2084: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2085: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2086: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2087: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2088: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2089: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2090: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
} as const;

export const nepaliMonthsInEnglish: { value: number; label: NepaliMonth }[] = [
  { value: 0, label: "Baisakh" },
  { value: 1, label: "Jestha" },
  { value: 2, label: "Asar" },
  { value: 3, label: "Shrawan" },
  { value: 4, label: "Bhadra" },
  { value: 5, label: "Ashwin" },
  { value: 6, label: "Kartik" },
  { value: 7, label: "Mangsir" },
  { value: 8, label: "Poush" },
  { value: 9, label: "Magh" },
  { value: 10, label: "Falgun" },
  { value: 11, label: "Chaitra" },
];

export function getNepaliMonthDays(year: number, month: number) {
  return CALENDAR_DATA[year][month];
}

export const calculateStartDay = (
  targetYear: number,
  targetMonth: number,
): number => {
  const referenceYear = 2075;
  const referenceStartDay = 3; // Wednesday (This is the known start day of 2075 BS)

  let totalDays = 0;

  // Calculate days for complete years
  if (targetYear > referenceYear) {
    // Forward calculation
    for (let year = referenceYear; year < targetYear; year++) {
      if (CALENDAR_DATA[year]) {
        totalDays += CALENDAR_DATA[year].reduce((sum, days) => sum + days, 0);
      }
    }
  } else if (targetYear < referenceYear) {
    // Backward calculation
    for (let year = targetYear; year < referenceYear; year++) {
      if (CALENDAR_DATA[year]) {
        totalDays -= CALENDAR_DATA[year].reduce((sum, days) => sum + days, 0);
      }
    }
  }

  // Add days for months in target year
  if (CALENDAR_DATA[targetYear]) {
    for (let month = 0; month < targetMonth - 1; month++) {
      totalDays += CALENDAR_DATA[targetYear][month];
    }
  }

  // Ensure positive result for modulo operation
  const dayIndex = (referenceStartDay + totalDays) % 7;
  return dayIndex < 0 ? dayIndex + 7 : dayIndex;
};
