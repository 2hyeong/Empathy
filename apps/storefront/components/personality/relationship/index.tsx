"use client";
import { Fragment } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
// ui
import { Grid, Typography } from "ui";
// state
import { personalityAtom } from "storefront/features/personality/atom";
// constant
import { MbtiRelationshipsLabel } from "storefront/constants/mbtiResults";
// model
import { MbtiResult } from "storefront/features/personality/models/mbtiResult";
// component
import RelationshipItem from "./Item";
// type
import type { IMBTIRelationshipLabel } from "../types/personality";

export default function PersonalityRelationship() {
  const [personalityState, setPersonalityState]: [
    string,
    SetterOrUpdater<string>
  ] = useRecoilState(personalityAtom);

  const personality16: MbtiResult = new MbtiResult(personalityState);
  const relationships = personality16.getRelationships();

  return (
    <Grid
      container
      spacing={1}
      sx={{
        borderRadius: "1.5rem",
        border: "1px solid rgba(145, 158, 171, 0.24)",
        padding: "2rem",
      }}
    >
      <Grid item xs={12} lg={12}>
        {MbtiRelationshipsLabel.map(
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
