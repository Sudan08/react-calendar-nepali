import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NepaliDate from "nepali-date-converter";

const nepaliMonthsInEnglish = [
  { value: 0, label: "Baisakh" },
  { value: 1, label: "Jestha" },
  { value: 2, label: "Asar" },
  { value: 3, label: "Shrawan" },
  { value: 4, label: "Bhadra" },
  { value: 5, label: "Ashwin" },
  { value: 6, label: "Kartik" },
  { value: 7, label: "Mangsir" },
  { value: 8, label: "Poush" },
  { value: 9, label: "Magh" },
  { value: 10, label: "Falgun" },
  { value: 11, label: "Chaitra" },
];

const MonthSelect = () => {
  const currentNepaliMonth = new NepaliDate(new Date()).getMonth();

  return (
    <Select defaultValue={currentNepaliMonth.toString()}>
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
