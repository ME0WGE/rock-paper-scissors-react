import HeaderLogo from "../headerLogo/HeaderLogo";
import HeaderScore from "../headerScore/HeaderScore";

import "./gameHeader.css";

export default function GameHeader() {
  return (
    <>
      <div className="header-container">
        <HeaderLogo imageSrc={"logo.svg"} title={"game logo"} />
        <HeaderScore score={12} />
      </div>
    </>
  );
}
