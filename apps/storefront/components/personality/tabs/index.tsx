"use client";
import { SyntheticEvent, useState } from "react";
// ui
import { Box, Tab, Tabs } from "ui";
import { DeviceHubIcon, TocIcon } from "ui/icons";
import PersonalityRelationship from "../relationship";
// component
import Bingo from "../bingo";
import TabPanel from "./TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            iconPosition="start"
            icon={<TocIcon />}
            label="빙고"
            {...a11yProps(0)}
          />
          <Tab
            iconPosition="start"
            icon={<DeviceHubIcon />}
            label="궁합"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Bingo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PersonalityRelationship />
      </TabPanel>
    </>
  );
}
