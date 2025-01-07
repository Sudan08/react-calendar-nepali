import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Weeks } from "@/model";

const WeekContainer = ({ eng, nep, engShort, nepShort }: Weeks) => {
  const matches = useMediaQuery("(min-width:768px)");
  return (
    <div className="flex justify-center items-center bg-calendar-containerBackground flex-col flex-1 py-2 rounded-lg ">
      <span className="text-xs md:text-base">{matches ? eng : engShort}</span>
      <span className="text-xs md:text-base">{matches ? nep : nepShort}</span>
    </div>
  );
};

export default WeekContainer;
