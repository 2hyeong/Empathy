import { AddIcon, Box, Button, Fab } from "ui";
import Layout from "storefront/components/layout";
import PersonalityList from "storefront/components/personality/list";

export default function Empathy() {
  return (
    <Layout>
      <Box sx={{ padding: 2 }}>
        <PersonalityList />
      </Box>

      {/* <Fab
        sx={{
          position: "fixed",
          bottom: 25,
          right: 25,
        }}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab> */}
    </Layout>
  );
}
