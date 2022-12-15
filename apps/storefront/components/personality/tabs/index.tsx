"use client";
import { SyntheticEvent, useState } from "react";
// ui
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import TocIcon from "@mui/icons-material/Toc";
// component
import PersonalityRelationship from "../relationship";
import Bingo from "../bingo";
import TabPanel from "./TabPanel";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function PersonalityTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ py: 3 }}>
        <Tabs value={value} onChange={handleChange} aria-label="성격유형 탭">
          <Tab
            iconPosition="start"
            icon={<TocIcon />}
            label="빙고"
            aria-label="빙고 탭"
            {...a11yProps(0)}
          />
          <Tab
            iconPosition="start"
            icon={<DeviceHubIcon />}
            label="궁합"
            aria-label="궁합 탭"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} aria-label="빙고 내용 공간">
        <Bingo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PersonalityRelationship aria-label="궁합 내용 공간" />
      </TabPanel>
    </>
  );
}
