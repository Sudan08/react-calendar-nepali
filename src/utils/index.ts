import { NepaliMonth } from "@/model";

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

export function getNepaliMonthDays(
  month: NepaliMonth,
  isLeapYear: boolean = false,
) {
  const months: Record<NepaliMonth, number> = {
    Baisakh: 31,
    Jestha: 31,
    Asar: 31,
    Shrawan: 31,
    Bhadra: 31,
    Ashwin: 30,
    Kartik: 30,
    Mangsir: 30,
    Poush: 30,
    Magh: 30,
    Falgun: 30,
    Chaitra: isLeapYear ? 31 : 30,
  };

  const days = months[month];
  if (!days) {
    throw new Error("Invalid Nepali month");
  }

  return Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    month,
  }));
}

export const calculateStartDay = (
  targetYear: number,
  targetMonth: number,
): number => {
  const referenceYear = 2070;
  const referenceStartDay = 0; // Sunday
  const parsedMonth =
    nepaliMonthsInEnglish.filter((item) => item.value === targetMonth).at(0)
      ?.label || "Baisakh";

  // Days in each month for a single year (accounting for leap years in Chaitra)
  const months: Record<NepaliMonth, number> = {
    Baisakh: 31,
    Jestha: 31,
    Asar: 31,
    Shrawan: 31,
    Bhadra: 31,
    Ashwin: 30,
    Kartik: 30,
    Mangsir: 30,
    Poush: 30,
    Magh: 30,
    Falgun: 30,
    Chaitra: targetYear % 4 === 3 ? 31 : 30,
  };

  // Get the months in order
  const monthKeys = Object.keys(months) as NepaliMonth[];

  let totalDays = 0;

  // Calculate days from reference year to target year
  for (let year = referenceYear; year < targetYear; year++) {
    const isLeapYear = year % 4 === 3; // Example leap year rule
    totalDays += Object.values({
      ...months,
      Chaitra: isLeapYear ? 31 : 30,
    }).reduce((a, b) => a + b, 0);
  }

  // Add days within the target year up to the target month
  const endIndex = monthKeys.indexOf(parsedMonth);
  for (let i = 0; i < endIndex; i++) {
    totalDays += months[monthKeys[i]];
  }

  // Calculate the start day by taking modulo 7
  return (referenceStartDay + totalDays) % 7;
};
