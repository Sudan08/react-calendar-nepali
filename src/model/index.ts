export interface Weeks {
  eng: string;
  nep: string;
  engShort: string;
  nepShort: string;
}

export type NepaliMonth =
  | "Baisakh"
  | "Jestha"
  | "Asar"
  | "Shrawan"
  | "Bhadra"
  | "Ashwin"
  | "Kartik"
  | "Mangsir"
  | "Poush"
  | "Magh"
  | "Falgun"
  | "Chaitra";

export interface NepaliDay {
  day: number;
  month: NepaliMonth;
}

export type CalendarEvent = {
  date: Date;
  title: string;
  location?: string;
  description?: string;
  startTime?: string;
  endTime?: string;
  isAllDay?: boolean;
  images?: string[];
  blogUrl?: string;
}
