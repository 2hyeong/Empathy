//
import Card from "./card.tsx";
import Paper from "./paper";
import Input from "./input";
import Table from "./table";
import Button from "./button";
import Tooltip from "./tooltip";
import Backdrop from "./backdrop";
import Typography from "./typography";
import Autocomplete from "./autocomplete";
import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Card(theme),
    Table(theme),
    Input(theme),
    Paper(),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme)
  );
}
