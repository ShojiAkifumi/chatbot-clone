import React from "react";
import List from "@mui/material/List";
import { Chat } from "./index";

const Chats = ({ chats }) => {
	return (
		<List
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
			className="chat-body"
			id="scroll-area"
		>
			{chats.map((chat, index) => (
				<Chat chat={chat.text} type={chat.type} key={index.toString()} />
			))}
		</List>
	);
};

export default Chats;
