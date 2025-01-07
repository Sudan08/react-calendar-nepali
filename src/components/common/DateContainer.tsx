export type DateContainer = {
  image?: string;
  isActive?: boolean;
};

const DateContainer = ({ image, isActive = false }: DateContainer) => {
  console.log(image, isActive);
  return (
    <div className="bg-calendar-containerBackground flex rounded-lg flex-1 justify-center items-center  flex-col py-4 ">
      <span className="text-xs md:text-base">1</span>
      <span className="text-xs md:text-base">1</span>
    </div>
  );
};

export default DateContainer;
