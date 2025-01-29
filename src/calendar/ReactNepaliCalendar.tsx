import DateGrid from "@/components/common/DateGrid";
import MonthSelect from "@/components/common/MonthSelect";
import YearSelect from "@/components/common/YearSelect";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NepaliDate from "nepali-date-converter";
import { useState } from "react";

export const ReactNepaliCalendar = () => {
  const currentNepaliYear = new NepaliDate(new Date()).getYear();
  const currentNepaliMonth = new NepaliDate(new Date()).getMonth();
  const [selectedYear, setSelectedYear] = useState<number>(currentNepaliYear);
  const [selectedMonth, setSelectedMonth] =
    useState<number>(currentNepaliMonth);

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <div className="max-w-full h-full m-4 p-4 flex flex-col gap-4 border-[1px] border-slate-300 rounded-md shadow-md bg-calendar-calendarBackground">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <span className="text-lg">2081 Mangsir | Dec/Jan 2024</span>
        <div className="flex flex-row gap-2 items-center justify-center">
        <Button onClick={handlePrevMonth}>
          <ChevronLeft />
        </Button>
        <Button>Today</Button>
        <Button onClick={handleNextMonth}>
          <ChevronRight />
        </Button>
        </div>
        <div className="flex flex-row gap-4">
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
