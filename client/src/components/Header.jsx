import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import { Menu as MenuIcon, Search, Tune } from "@mui/icons-material";
import { gmailLogo } from "../contsants/constants";

// eslint-disable-next-line
const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5 ",
  boxShadow: "none",
});
const SearchWrap = styled(Box)({
  background: "#eaf1fb ",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});
const Header = () => {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" />
          <img
            src={gmailLogo}
            alt="gmailLogo"
            style={{ marginLeft: 15, width: 100 }}
          />
          <SearchWrap>
            <Search color="action" />
            <InputBase placeholder="Search Mail" />
            <Tune color="action" />
          </SearchWrap>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default Header;

//App Bar and toolbar
