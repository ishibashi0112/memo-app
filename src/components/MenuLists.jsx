import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaBars } from "react-icons/fa";
import { Link } from "@mui/material";
import { signOutAuth } from "../firebase/firebaseAuth";
import { useRouter } from "next/router";

const MenuLists = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickSignOut = () => {
    signOutAuth(router);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <h1 className="text-black text-xl">
          <FaBars />
        </h1>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link href="/notes">
            <a className="no-underline text-black ">New</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClickSignOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuLists;
