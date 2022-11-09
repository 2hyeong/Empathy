import {
  personalities16,
  TPersonalities16,
} from "storefront/constants/personality";
import { getFriends } from "storefront/lib/api/useUser";
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
  const [personality, setPersonality] = useState<TPersonalities16>();
  const [index, setIndex] = useState<number>(0);

  const pathname = usePathname();
  const slug = Number(pathname.split("/").pop());

  const { data: friends, error } = useSWR<
    operations["getFriends"]["responses"]["200"]["content"]["application/json"],
    operations["getFriends"]["responses"]["default"]["content"]["application/json"]
  >("/api/users/friends", getFriends);

  const isMaxIndex = useMemo(
    () =>
      personality?.bingo &&
      index === Math.floor(personality?.bingo?.length / 9),
    [index]
  );

  const setFriendPersonality = (friends: Friend[]) => {
    const label = friends[slug]?.personality;
    const friendPersonality = personalities16.filter(
      (p) => p.label === label
    )[0];
    setPersonality(friendPersonality);
  };

  useEffect(() => {
    if (friends) setFriendPersonality(friends);
  }, [friends, setFriendPersonality]);

  const handleClickBefore = () => {
    setIndex(index - 1);
  };

  const handleClickNext = () => {
    setIndex(index + 1);
  };

  return (
    <Box sx={{ display: "flex", justifyItems: "center" }}>
      <NavButton onClick={handleClickBefore} disabled={index === 0}>
        <KeyboardArrowLeft />
        이전
      </NavButton>

      <Grid container spacing={1.5} sx={{ maxWidth: 800, paddingX: 4 }}>
        {personality?.bingo.slice(index * 9, (index + 1) * 9).map((bingo) => (
          <Grid item xs={4}>
            <Item>{bingo}</Item>
          </Grid>
        ))}
      </Grid>
      <NavButton onClick={handleClickNext} disabled={isMaxIndex}>
        더보기
        <KeyboardArrowRight />
      </NavButton>
    </Box>
  );
}
