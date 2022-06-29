import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import NoProfile from "../assets/img/no-profile.png";
import Torahack from "../assets/img/torahack.png";

const Chat = ({ chat, type }) => {
	const isQuestion = type === "question";
	return (
		<ListItem className={isQuestion ? "p-chat__row" : "p-chat__reverse"}>
			<ListItemAvatar>
				{isQuestion ? (
					<Avatar alt="icon" src={Torahack} />
				) : (
					<Avatar alt="icon" src={NoProfile} />
				)}
			</ListItemAvatar>
			<div className="p-chat__bubble">{chat}</div>
		</ListItem>
	);
};

export default Chat;
