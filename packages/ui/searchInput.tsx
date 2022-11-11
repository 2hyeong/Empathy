import InputBase from "@mui/material/InputBase";
import CssBaseline from "@mui/material/CssBaseline";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

const Search = styled("div")(() => ({
  position: "relative",
  width: "100%",
  borderBottom: "1px solid #6b7280",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    color: theme.palette.getContrastText("#000"),
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  width: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
}));

export const SearchInput = () => {
  return (
    <Container>
      <Search>
        <CssBaseline />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="검색..."
          inputProps={{ "aria-label": "검색" }}
        />
      </Search>
    </Container>
  );
};
