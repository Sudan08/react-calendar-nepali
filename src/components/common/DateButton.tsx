import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import dayjs from "dayjs";
import NepaliDate from "nepali-date-converter";
import { CalendarEvent } from "@/model";
import { IYearMonthDate } from "nepali-date-converter/dist/types/nepali-date-helper";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type DateButtonProps = {
  day: number;
  month: number;
  year: number;
  events: CalendarEvent[];
  onClick?: () => void;
  englishDate: IYearMonthDate;
};

const DateButton = ({
  day,
  month,
  year,
  events,
  onClick,
  englishDate,
}: DateButtonProps) => {
  const convertToNepaliNumeral = (number: number): string => {
    const nepaliNumerals = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return number
      .toString()
      .split("")
      .map((digit) => nepaliNumerals[parseInt(digit)])
      .join("");
  };

  const today = new NepaliDate();

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const isTodayDate =
    month === today.getMonth() &&
    day === today.getDate() &&
    year === today.getYear();

  const dateDiff = dayjs(
    new Date(englishDate.year, englishDate.month, englishDate.date)
  )
    .startOf("day")
    .diff(dayjs(new Date()).startOf("day"), "days");

  return (
    <Button
      onClick={events ? onClick : undefined}
      className={cn(
        `bg-calendar-containerBackground flex rounded-lg flex-1 justify-between items-center flex-col p-1 md:p-2 h-16 md:h-[120px] relative hover:bg-calendar-containerBackground  cursor-default`,
        events && "hover:cursor-pointer"
      )}
    >
      {events?.length > 0 ? (
        <>
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg z-0" />
          <img
            src={events?.[0].images?.[0]}
            alt="Event background"
            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-20 z-0"
          />
        </>
      ) : null}
      <div className="relative z-10 flex flex-col w-full h-full gap-2 justify-between">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full md:h-fit">
          <span
            className={cn(
              "flex items-center justify-center  w-6 h-6 text-xs md:text-sm text-gray-800",
              isTodayDate && "bg-gray-800 text-white rounded-full"
            )}
          >
            {englishDate.date}
          </span>

          <span
            className={cn(
              "flex items-center justify-center w-6 h-6 text-xs md:text-sm text-gray-800",
              isTodayDate && "bg-gray-800 text-white rounded-full"
            )}
          >
            {convertToNepaliNumeral(day)}
          </span>
        </div>
        {!isSmallScreen && events?.length > 0 ? (
          <div className="flex flex-row justify-center items-center bg-calendar-calendarBackground w-fit px-2 mx-auto rounded-sm border-calendar-containerBackground border-[1px] text-black">
            <span className="text-xs md:text-sm">{events[0].title}</span>
          </div>
        ) : null}
        {!isSmallScreen && (
          <div
            className={cn(
              "flex flex-row justify-end items-center bg-calendar-calendarBackground w-fit rounded-sm border-calendar-containerBackground border-[1px] px-2 ml-auto"
            )}
          >
            {dateDiff > 0 ? (
              <span className="text-xs md:text-sm text-green-500">
                {dateDiff} day left
              </span>
            ) : dateDiff < 0 ? (
              <span className="text-xs md:text-sm text-slate-600">
                {Math.abs(dateDiff)} day ago
              </span>
            ) : (
              <span className="text-xs md:text-sm  text-green-500">Today</span>
            )}
          </div>
        )}
      </div>
    </Button>
  );
};

export default DateButton;
