import { Palette } from "@mui/material/styles";

export type TMbtiKey = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
export type TMbtiType = "M" | "B" | "T" | "I";

export interface IMbti {
  key: TMbtiKey;
  title: string;
  caption: string;
  type: TMbtiType;
  color: keyof Palette;
  selected: boolean;
}

export interface IMBTIRelationship {
  best: string[];
  good: string[];
  normal: string[];
  bad: string[];
  worst: string[];
}
export interface IMBTIRelationshipLabel {
  key: keyof IMBTIRelationship;
  label: string;
}
export interface IMbtiResult {
  label: string;
  bingo: string[];
  relationship: IMBTIRelationship;
}
