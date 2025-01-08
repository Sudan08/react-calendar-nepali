import { Weeks } from "@/model";
import DateContainer from "./DateContainer";
import WeekContainer from "./WeekContainer";
import { calculateStartDay, getNepaliMonthDays } from "@/utils";

const weeks: Weeks[] = [
  { eng: "Sunday", nep: "आइतबार", engShort: "Sun", nepShort: "आइत" },
  { eng: "Monday", nep: "सोमबार", engShort: "Mon", nepShort: "सोम" },
  { eng: "Tuesday", nep: "मंगलबार", engShort: "Tue", nepShort: "मंगल" },
  { eng: "Wednesday", nep: "बुधबार", engShort: "Wed", nepShort: "बुध" },
  { eng: "Thursday", nep: "बिहीबार", engShort: "Thu", nepShort: "बिही" },
  { eng: "Friday", nep: "शुक्रबार", engShort: "Fri", nepShort: "शुक्र" },
  { eng: "Saturday", nep: "शनिबार", engShort: "Sat", nepShort: "शनि" },
];

export type DataGridProps = {
  selectedYear: number;
  selectedMonth: number;
};

const DataGrid = ({ selectedYear, selectedMonth }: DataGridProps) => {
  const monthArray = getNepaliMonthDays("Baisakh");
  const startDay = calculateStartDay(selectedYear, selectedMonth);
  console.log(startDay, " this is the start day");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center gap-1 md:gap-2 lg:gap-4">
        {weeks.map((item, idx) => (
          <WeekContainer {...item} key={idx} />
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2 lg:gap-4">
        {monthArray.map((item, idx) => (
          <DateContainer {...item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DataGrid;
