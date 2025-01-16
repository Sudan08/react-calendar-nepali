import { cx } from "class-variance-authority";
import NepaliDate from "nepali-date-converter";
import dayjs from "dayjs";

export type DateContainer = {
  month: number;
  year: number;
  day: number;
  image?: string;
  isActive?: boolean;
};

const DateContainer = ({
  day,
  month,
  year,
  image,
}: // isActive = false,
DateContainer) => {
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

  return (
    <div className="bg-calendar-containerBackground flex rounded-lg flex-1 justify-between items-center  flex-col p-2 h-16 md:h-[120px]  ">
      {image ? (
        <span className="text-xs w-full md:text-base">"Image"</span>
      ) : null}
      <div className="flex flex-row items-center justify-between w-full">
        <span
          className={cx(
            "flex items-center justify-center w-8 h-8 md:w-10 md:h-10",
            "text-md md:text-xl",
            isTodayDate && "bg-gray-800 text-white rounded-full"
          )}
        >
          {englishDate.date}
        </span>

        <span
          className={cx(
            "flex items-center justify-center w-8 h-8 md:w-10 md:h-10",
            "text-md md:text-xl",
            isTodayDate && "bg-gray-800 text-white rounded-full"
          )}
        >
          {day}
        </span>
      </div>
      <div
        className={cx(
          "flex flex-row justify-center items-center bg-calendar-calendarBackground w-full rounded-sm border-calendar-containerBackground border-[1px]"
        )}
      >
        {dateDiff > 0 ? (
          <span className="text-xs md:text-base text-green-500">
            {dateDiff} day left
          </span>
        ) : dateDiff < 0 ? (
          <span className="text-xs md:text-base text-red-500">
            {Math.abs(dateDiff)} day ago
          </span>
        ) : (
          <span className="text-xs md:text-base text-green-500">Today</span>
        )}
      </div>
    </div>
  );
};

export default DateContainer;
