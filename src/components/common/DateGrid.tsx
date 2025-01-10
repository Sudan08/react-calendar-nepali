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
  const daysArray = Array.from({ length: days }, (_, idx) => idx + 1);
  const startDay = new NepaliDate(selectedYear, selectedMonth, 1).getDay();
  console.log(startDay);

  const preContainer = Array.from(
    { length: startDay === 0 ? 1 : startDay },
    (_, idx) => idx,
  );

  const postContainer = Array.from({ length: 34 - days }, (_, idx) => idx + 1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center gap-1 md:gap-2 lg:gap-4">
        {weeks.map((item, idx) => (
          <WeekContainer {...item} key={idx} />
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2 lg:gap-4">
        {preContainer.map((_, idx) => (
          <DateContainer key={idx} />
        ))}
        {daysArray.map((item, idx) => (
          <DateContainer day={item} key={idx} />
        ))}
        {postContainer.map((_, idx) => (
          <DateContainer key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DataGrid;
