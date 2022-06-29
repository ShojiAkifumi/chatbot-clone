import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextInput from "./TextInput";

const FormDialog = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const inputName = useCallback(
		(e) => {
			setName(e.target.value);
		},
		[setName]
	);

	const inputEmail = useCallback(
		(e) => {
			setEmail(e.target.value);
		},
		[setEmail]
	);

	const inputMessage = useCallback(
		(e) => {
			setMessage(e.target.value);
		},
		[setMessage]
	);

	const submitform = () => {
		window.alert(
			`メッセージが届きました！\nお名前:${name}\nEメール:${email}\nお問い合わせ内容:${message}`
		);
		setName("");
		setEmail("");
		setMessage("");
		props.handleClose();
	};
	return (
		<div>
			<Dialog
				open={props.isOpen}
				onClose={props.handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
				<DialogContent>
					<TextInput
						label="お名前"
						name="name"
						type="text"
						multiline={false}
						rows={1}
						value={name}
						onChange={inputName}
					/>
					<TextInput
						label="Eメール"
						name="email"
						type="email"
						multiline={false}
						rows={1}
						value={email}
						onChange={inputEmail}
					/>
					<TextInput
						label="お問い合わせ内容"
						name="message"
						type="text"
						multiline={true}
						rows={4}
						value={message}
						onChange={inputMessage}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.handleClose}>戻る</Button>
					<Button onClick={submitform} autoFocus>
						送信する
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default FormDialog;
