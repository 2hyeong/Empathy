// ui
import { ReactElement } from "react";
import { Typography } from "ui";

interface TabPanelProps {
  children: ReactElement;
  value: number;
  index: number;
}

export default function TabPanel({
  children,
  value,
  index,
  ...other
}: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}
