import { cx } from "class-variance-authority";
import NepaliDate from "nepali-date-converter";

export type DateContainer = {
  month?: number;
  year?: number;
  day?: number;
  image?: string;
  isActive?: boolean;
};

const DateContainer = ({
  day,
  month,
  year,
  image,
  isActive = false,
}: DateContainer) => {
  const today = new NepaliDate();

  const isTodayDate =
    month === today.getMonth() &&
    day === today.getDate() &&
    year === today.getYear();

  return (
    <div className="bg-calendar-containerBackground flex rounded-lg flex-1 justify-center items-end  flex-col p-2 ">
      {image ? (
        <span className="text-xs w-full md:text-base">"Image"</span>
      ) : null}
      <span
        className={cx(
          "flex items-center justify-center w-8 h-8 md:w-10 md:h-10",
          "text-md md:text-xl",
          isTodayDate && "bg-gray-800 text-white rounded-full",
        )}
      >
        {day}
      </span>
    </div>
  );
};

export default DateContainer;
