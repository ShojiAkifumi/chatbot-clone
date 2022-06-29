import React from "react";
import Button from "@mui/material/Button";
function Answer(props) {
	return (
		<Button
			variant="contained"
			sx={{ width: "100%", mb: 1 }}
			onClick={() => props.select(props.content, props.nextId)}
		>
			{props.content}
		</Button>
	);
}

export default Answer;
