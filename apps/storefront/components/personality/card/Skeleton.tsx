import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export function PersonalityCardSkeleton() {
  return <Skeleton height={150} variant="rounded" />;
}

export default function PersonalityCardListSkelton() {
  return (
    <Box sx={{ p: 4 }}>
      <Skeleton width={260} variant="text" sx={{ marginY: 4 }} />
      <Grid container spacing={1} columns={8}>
        {new Array(8).fill(undefined).map((el, key) => (
          <Grid item xs={4} lg={2} key={key}>
            <PersonalityCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
