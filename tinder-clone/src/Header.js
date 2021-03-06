import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img
        className="header_logo"
        alt=""
        src="https://www.pngkit.com/png/detail/73-730019_tinder-logo-transparent-tinder-logo-png.png"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
