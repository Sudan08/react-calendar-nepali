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
