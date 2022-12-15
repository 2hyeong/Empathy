// ui
import Box from "@mui/material/Box";
import { ReactElement } from "react";

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
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      sx={{ width: "100%" }}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Box>
  );
}
