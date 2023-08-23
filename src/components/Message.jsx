import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();
  const timestamp = message.date;

  // Convert the Timestamp object to a JavaScript Date object
  const date = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );

  // Function to format a number with leading zero if needed
  const formatWithLeadingZero = (num) => (num < 10 ? `0${num}` : num);

  // Function to get the formatted date string
  const getFormattedDateString = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const day = formatWithLeadingZero(date.getDate());
    const hours = formatWithLeadingZero(date.getHours() % 12 || 12);
    const minutes = formatWithLeadingZero(date.getMinutes());
    const ampm = date.getHours() >= 12 ? "PM" : "AM";

    return `${month} / ${day} - ${hours}:${minutes} ${ampm}`;
  };

  // Get the formatted date string
  const formattedDateString = getFormattedDateString(date);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span className="messageDate">{formattedDateString}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
