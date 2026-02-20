import React from "react";
import BitcoinLogo from "./Bitcoinphoto.png"; 
const WebsiteLogo: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000000", 
      }}
    >
      <img
        src={BitcoinLogo}
        alt="Bitcoin Logo"
        style={{ width: "400px", height: "auto" }}
      />
    </div>
  );
};

export default WebsiteLogo;
