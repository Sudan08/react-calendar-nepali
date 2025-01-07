import { NepaliMonth } from "@/model";

export function getNepaliMonthDays(
  month: NepaliMonth,
  isLeapYear: boolean = false,
) {
  const months: Record<NepaliMonth, number> = {
    Baisakh: 31,
    Jestha: 31,
    Ashadh: 31,
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
