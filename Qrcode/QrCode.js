import React from "react";
import "./QrCode.scss";
import qrcode from "./assets/image-qr-code.png";

export default function QrCode() {
  return (
    <div className="qrcodecomponent">
      <div className="image">
        <img id="qr" src={qrcode} alt="okk" />
      </div>
      <div className="text">
        <p className="p1">Improve your front-end skills by building projects</p>
        <p className="p2">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to next level
        </p>
      </div>
    </div>
  );
}
