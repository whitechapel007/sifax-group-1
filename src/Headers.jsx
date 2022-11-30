import React from "react";
import Search from "./Search";
import Buttons from "./Button";
import Avatars from "./Avatar";
import Notification from "./Notification";
const Headers = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "4px",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Search style={{ width: "300px" }} />
      <Buttons />
      <Avatars />
    </div>
  );
};

export default Headers;
