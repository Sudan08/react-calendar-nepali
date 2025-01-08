import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nepaliMonthsInEnglish } from "@/utils";

export type MonthSelectPropos = {
  selectedMonth: number;
  handleChange: (value: string) => void;
};

const MonthSelect = ({ selectedMonth, handleChange }: MonthSelectPropos) => {
  return (
    <Select
      defaultValue={selectedMonth.toString()}
      onValueChange={handleChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent>
        {nepaliMonthsInEnglish.map((month, idx) => (
          <SelectItem key={idx} value={month.value.toString()}>
            {month.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MonthSelect;
