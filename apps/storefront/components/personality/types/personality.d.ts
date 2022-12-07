export type PersonalityKey = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
export type PersonalityType = "M" | "B" | "T" | "I";

export interface Personality {
  key: PersonalityKey;
  title: string;
  caption: string;
  type: PersonalityType;
  color: string;
  selected: boolean;
}
