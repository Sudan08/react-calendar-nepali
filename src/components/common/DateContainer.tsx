export type DateContainer = {
  image?: string;
  isActive?: boolean;
};

const DateContainer = ({ image, isActive = false }: DateContainer) => {
  return (
    <div className="bg-calendar-containerBackground flex rounded-lg flex-1 justify-center items-center  flex-col py-4 ">
      <span className="text-xs md:text-base">
        {image ? "Image" : "No Image"}
      </span>
      <span className="text-xs md:text-base">
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );
};

export default DateContainer;
