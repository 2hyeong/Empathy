"use client";

import {
  personalities16,
  TPersonalities16,
} from "storefront/constants/personality";
import useSWR from "swr";
import {
  Box,
  Button,
  ButtonProps,
  Grid,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Paper,
  styled,
} from "ui";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { operations } from "idl/gen";
import { Friend } from "idl/gen/typescript-fetch";
import { getFriend } from "storefront/lib/api/useFriend";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  ...theme.typography.h5,
  height: 250,
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Poor Story",
  "&:hover": {
    opacity: 0.5,
    cursor: "pointer",
  },
}));

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
  const [index, setIndex] = useState<number>(0);

  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const { data: friend, error } = useSWR<
    operations["getFriend"]["responses"]["200"]["content"]["application/json"],
    operations["getFriend"]["responses"]["default"]["content"]["application/json"]
  >(`/api/users/friends/${slug}`, () => getFriend(slug as string));
  if (error) console.error(error);

  const isMaxIndex = useMemo(
    () => index === Math.floor(bingoList.length / 9),
    [index, bingoList]
  );

  const setFriendPersonality = (friend: Friend) => {
    const label = friend.personality;
    const friendBingo =
      personalities16.filter((p) => p.label === label)[0]?.bingo || [];
    setBingoList(friendBingo);
  };

  useEffect(() => {
    if (friend) setFriendPersonality(friend);
  }, [friend, setFriendPersonality]);

  const handleClickBefore = () => {
    setIndex(index - 1);
  };

  const handleClickNext = () => {
    setIndex(index + 1);
  };

  return (
    <Box sx={{ display: "flex", justifyItems: "center" }}>
      <NavButton
        onClick={handleClickBefore}
        disabled={index === 0}
        data-testid="bingo-prev-btn"
      >
        <KeyboardArrowLeft />
        이전
      </NavButton>

      <Grid
        container
        spacing={1.5}
        sx={{ maxWidth: 800, paddingX: 4 }}
        data-testid="bingo-grid-container"
      >
        {bingoList.slice(index * 9, (index + 1) * 9).map((bingo, key) => (
          <Grid key={key} item xs={4} data-testid="bingo-grid-item">
            <Item>{bingo}</Item>
          </Grid>
        ))}
      </Grid>
      <NavButton
        onClick={handleClickNext}
        disabled={isMaxIndex}
        data-testid="bingo-next-btn"
      >
        더보기
        <KeyboardArrowRight />
      </NavButton>
    </Box>
  );
}
