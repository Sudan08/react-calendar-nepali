import DateGrid from "@/components/common/DateGrid";
import MonthSelect from "@/components/common/MonthSelect";
import YearSelect from "@/components/common/YearSelect";
import { Button } from "@/components/ui/button";
import NepaliDate from "nepali-date-converter";
import { useState } from "react";

export const ReactNepaliCalendar = () => {
  const currentNepaliYear = new NepaliDate(new Date()).getYear();
  const currentNepaliMonth = new NepaliDate(new Date()).getMonth();
  const [selectedYear, setSelectedYear] = useState<number>(currentNepaliYear);
  const [selectedMonth, setSelectedMonth] =
    useState<number>(currentNepaliMonth);

  return (
    <div className="max-w-full h-[90vh] m-4 p-4 flex flex-col gap-4 border-[1px] border-slate-300 rounded-md shadow-md bg-calendar-calendarBackground">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <span className="text-lg">2081 Mangsir | Dec/Jan 2024</span>
        <Button>Today</Button>
        <div className="flex flex-row gap-2">
          <YearSelect
            selectedYear={selectedYear}
            handleChange={(value) => setSelectedYear(Number(value))}
          />
          <MonthSelect
            selectedMonth={selectedMonth}
            handleChange={(value) => setSelectedMonth(Number(value))}
          />
        </div>
      </div>
      <DateGrid selectedYear={selectedYear} selectedMonth={selectedMonth} />
    </div>
  );
};
