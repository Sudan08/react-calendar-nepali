export type DateContainer = {
  day?: number;
  image?: string;
  isActive?: boolean;
};

const DateContainer = ({ day, image, isActive = false }: DateContainer) => {
  return (
    <div className="bg-calendar-containerBackground flex rounded-lg flex-1 justify-center items-center  flex-col p-2 ">
      {image ? (
        <span className="text-xs w-full md:text-base">"Image"</span>
      ) : null}
      <span className="text-end w-full text-md md:text-xl ">{day}</span>
    </div>
  );
};

export default DateContainer;
