import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const years = [
  2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082,
  2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090,
];

export type YearSelectProps = {
  selectedYear: number;
  handleChange: (value: string) => void;
};

const YearSelect = ({ selectedYear, handleChange }: YearSelectProps) => {
  return (
    <>
      <Select
        onValueChange={handleChange}
        defaultValue={selectedYear.toString() || undefined}
      >
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
