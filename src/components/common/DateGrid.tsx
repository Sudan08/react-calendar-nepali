import { Weeks } from "@/model";
import DateContainer from "./DateContainer";
import WeekContainer from "./WeekContainer";
import { getNepaliMonthDays } from "@/utils";
import NepaliDate from "nepali-date-converter";

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
  const days = getNepaliMonthDays(selectedYear, selectedMonth);
  const daysArray = Array.from({ length: days }, (_, idx) => ({
    day: idx + 1,
    month: selectedMonth,
    year: selectedYear,
  }));
  const startDay = new NepaliDate(selectedYear, selectedMonth, 1).getDay();

  const preContainer = Array.from(
    { length: startDay === 0 ? 1 : startDay },
    (_, idx) => idx
  );

  const postContainer = Array.from({ length: 34 - days }, (_, idx) => idx + 1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center gap-1 md:gap-2 lg:gap-2">
        {weeks.map((item, idx) => (
          <WeekContainer {...item} key={idx} />
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1  lg:gap-2">
        {preContainer.map((_, idx) => (
          <EmptyContainer key={idx} />
        ))}
        {daysArray.map((item, idx) => (
          <DateContainer {...item} key={idx} />
        ))}
        {postContainer.map((_, idx) => (
          <EmptyContainer key={idx} />
        ))}
      </div>
    </div>
  );
};

export const EmptyContainer = () => {
  return (
    <div className="bg-calendar-containerBackground flex rounded-lg flex-1 justify-center items-end  flex-col p-2 min-h-full md:min-h-[120px] h-full" />
  );
};

export default DataGrid;
