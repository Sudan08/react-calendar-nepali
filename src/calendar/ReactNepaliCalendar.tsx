import DateGrid from "@/components/common/DateGrid";
import MonthSelect from "@/components/common/MonthSelect";
import YearSelect from "@/components/common/YearSelect";
import { Button } from "@/components/ui/button";

export const ReactNepaliCalendar = () => {
  return (
    <div className="max-w-full h-[90vh] m-4 p-4 flex flex-col gap-4 border-[1px] border-slate-300 rounded-md shadow-md bg-calendar-calendarBackground">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <span className="text-lg">2081 Mangsir | Dec/Jan 2024</span>
        <Button>Today</Button>
        <div className="flex flex-row gap-2">
          <YearSelect />
          <MonthSelect />
        </div>
      </div>
      <DateGrid />
    </div>
  );
};
