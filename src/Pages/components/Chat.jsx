import React from "react";
import Cam from "../../img/Cam.svg";
import Add from "../../img/Add.svg";
import More from "../../img/More.svg";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
