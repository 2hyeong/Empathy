// ui
import useMediaQuery from "@mui/material/useMediaQuery";
import { Breakpoint, useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function useResponsive(
  query: string,
  start: Breakpoint,
  end?: number | Breakpoint
) {
  const theme = useTheme();
  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));
  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start, end || start)
  );

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  return mediaOnly;
}

// ----------------------------------------------------------------------

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output: unknown, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || "xs"
  );
}
