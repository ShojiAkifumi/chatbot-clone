import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = ({ label, name, type, multiline, rows, value, onChange }) => {
	return (
		<TextField
			fullWidth
			label={label}
			name={name}
			type={type}
			multiline={multiline}
			rows={rows}
			value={value}
			variant="outlined"
			margin="dense"
			onChange={onChange}
		/>
	);
};

export default TextInput;
