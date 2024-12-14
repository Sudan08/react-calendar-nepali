import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import NepaliDate from "nepali-date-converter";

const years = [
  2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082,
  2083, 2084, 2085,
];

const YearSelect = () => {
  const currentNepaliYear = new NepaliDate(new Date()).getYear();

  return (
    <>
      <Select defaultValue={currentNepaliYear.toString() || undefined}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((item, idx) => (
            <SelectItem key={idx} value={item.toString()}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default YearSelect;
