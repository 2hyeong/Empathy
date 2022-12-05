"use client";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import useSWR from "swr";
// const
import {
  personalities16,
  TPersonalities16,
} from "storefront/constants/personality";
// ui
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  styled,
  Typography,
} from "ui";
import type { ButtonProps } from "ui/types";
import { ThumbUpAltIcon, ThumbUpOffAltIcon } from "ui/icons";
// idl
import { operations } from "idl/gen";
import { Friend } from "idl/gen/typescript-fetch";
// hooks
import { getFriend } from "storefront/lib/api/useFriend";
import {
  ClickableCard,
  SvgColor,
} from "storefront/../../packages/ui/components";
import BingoItem from "./item";

const StyledTitle = styled(Typography)({
  display: "flex",
});

const NavButton = ({
  children,
  sx,
  ...rest
}:
  | {
      children: ReactNode;
      sx: ButtonProps["sx"];
    }
  | ButtonProps) => {
  return (
    <Button sx={{ height: "fit-content", marginY: "auto", ...sx }} {...rest}>
      {children}
    </Button>
  );
};

export default function Bingo() {
  const [bingoList, setBingoList] = useState<TPersonalities16["bingo"]>([]);

  // const { data: friend, error } = useSWR<
  //   operations["getFriend"]["responses"]["200"]["content"]["application/json"],
  //   operations["getFriend"]["responses"]["default"]["content"]["application/json"]
  // >(`/api/users/friends/${slug}`, () => getFriend(slug as string));
  // if (error) console.error(error);

  const setFriendPersonality = (friend: Friend) => {
    // console.log(friend);
    // const label = friend.personality;
    const label = "ISTP";
    const friendBingo =
      personalities16.filter((p) => p.label === label)[0]?.bingo || [];
    setBingoList(friendBingo);
  };

  useEffect(() => {
    setFriendPersonality();
  });

  // useEffect(() => {
  //   if (friend) setFriendPersonality(friend);
  // }, [friend, setFriendPersonality]);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        height: "100%",
      }}
    >
      <Typography sx={{ pl: 4, pt: 4 }} variant="h2">
        ISTP
      </Typography>
      <Grid
        container
        spacing={1.5}
        sx={{ p: 4 }}
        data-testid="bingo-grid-container"
      >
        {bingoList.map((bingo, key) => (
          <Grid key={key} item xs={12} lg={3} data-testid="bingo-grid-item">
            <BingoItem content={bingo} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
