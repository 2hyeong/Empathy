"use client";
import { useRecoilValue } from "recoil";
// ui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// state
import { mbtiResultAtom } from "storefront/features/personality/atom";
// constant
import { mbtiRelationshipsLabel } from "storefront/constants/mbtiResults";
// model
import { MbtiResult } from "storefront/features/personality/models/mbtiResult";
// component
import RelationshipItem from "./Item";
// type
import type { IMBTIRelationshipLabel } from "../types/personality";

export default function PersonalityRelationship() {
  const mbtiResultState: string = useRecoilValue(mbtiResultAtom);

  const personality16: MbtiResult = new MbtiResult(mbtiResultState);
  const relationships = personality16.getRelationships();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} lg={12}>
        {mbtiRelationshipsLabel.map(
          (relationshipLabel: IMBTIRelationshipLabel) => (
            <>
              <Typography variant="h6" color="gray" sx={{ mb: 2 }}>
                {relationshipLabel.label}
              </Typography>
              {relationships && relationships[relationshipLabel.key]?.length
                ? relationships[relationshipLabel.key].map((item: string) => (
                    <RelationshipItem item={item} />
                  ))
                : null}
            </>
          )
        )}
      </Grid>
    </Grid>
  );
}
