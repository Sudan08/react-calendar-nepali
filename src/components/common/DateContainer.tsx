import { cx } from "class-variance-authority";
import NepaliDate from "nepali-date-converter";
import dayjs from "dayjs";
import { CalendarEvent } from "@/model";

export type DateContainer = {
  month: number;
  year: number;
  day: number;
  
  events?: CalendarEvent[];
};

const DateContainer = ({ day, month, year,   events}: DateContainer) => {
  const convertToNepaliNumeral = (number: number): string => {
    const nepaliNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return number.toString().split('').map(digit => nepaliNumerals[parseInt(digit)]).join('');
  };

  const today = new NepaliDate();

  const isTodayDate =
    month === today.getMonth() &&
    day === today.getDate() &&
    year === today.getYear();

  const englishDate = new NepaliDate(year, month, day).getAD();

  const dateDiff = dayjs(
    new Date(englishDate.year, englishDate.month, englishDate.date)
  )
    .startOf("day")
    .diff(dayjs(new Date()).startOf("day"), "days");

    const event = events?.find(event => 
      dayjs(event.date).startOf('day').valueOf() === 
      dayjs(new Date(englishDate.year, englishDate.month, englishDate.date)).startOf('day').valueOf()
    );
    


  return (
    <div className="bg-calendar-containerBackground flex rounded-lg flex-1 justify-between items-center flex-col p-2 h-16 md:h-[120px] relative">
      {event ? (
    <>
    <div className="absolute inset-0 bg-black opacity-60 rounded-lg z-0" />
    <img 
      src={event?.images?.[0]} 
      alt="Event background"
      className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-20 z-0"
    />
  </>
      ) : null}
      <div className="relative z-10 flex flex-col w-full h-full gap-2 justify-between">
        <div className="flex flex-row items-center justify-between w-full">
          <span
            className={cx(
              "flex items-center justify-center w-4 h-4 md:w-6 md:h-6",
              "text-sm",
              isTodayDate && "bg-gray-800 text-white rounded-full"
            )}
          >
            {englishDate.date}
          </span>

          <span
            className={cx(
              "flex items-center justify-center w-4 h-4 md:w-6 md:h-6",
              "text-sm",
              isTodayDate && "bg-gray-800 text-white rounded-full"
            )}
          >
            {convertToNepaliNumeral(day)}
          </span>
        </div>
        {event ? (
          <div className="flex flex-row justify-center items-center bg-calendar-calendarBackground w-fit px-2 mx-auto rounded-sm border-calendar-containerBackground border-[1px]">
            <span className="text-xs md:text-sm">
              {events?.[0].title}
            </span>
          </div>
        ) : null}
        <div
          className={cx(
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
      </div>
    </div>
  );
};

export default DateContainer;
